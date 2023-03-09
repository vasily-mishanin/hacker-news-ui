import { HNComment, Story } from '~/types/types';
import { getDateString } from '~/utils/helpers';

const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export async function fetchNewsItem(newsItemId: string) {
  try {
    const newsItem = <Story>(
      await (
        await fetch(`${baseURL}item/${newsItemId}.json?print=pretty`)
      ).json()
    );
    newsItem.date = getDateString(newsItem.time);
    return newsItem;
  } catch (err) {
    console.log('CATCH');
    if (err instanceof Error) {
      console.warn(err.message);
    }
  }
}

export async function fetchRootComments(commentsIds: number[]) {
  try {
    const rootCommentsResponces = await Promise.all(
      commentsIds.map((commentId) =>
        fetch(`${baseURL}item/${commentId}.json?print=pretty`)
      )
    );
    const rootComments = (await Promise.all(
      rootCommentsResponces.map((res) => res.json())
    )) as HNComment[];
    const commentsPrepared = addDateStringToAll(rootComments);
    return commentsPrepared;
  } catch (err) {
    console.log('CATCH');
    if (err instanceof Error) {
      console.warn(err.message);
    }
  }
}

export function addDateStringToAll(items: Story[] | HNComment[]) {
  return items.map((item) => {
    item.date = getDateString(item.time);
    return item;
  });
}
