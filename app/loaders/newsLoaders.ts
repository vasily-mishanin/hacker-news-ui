import { HNComment, IDs, Story } from '~/types/types';
import { getDateString } from '~/utils/helpers';

const baseURL = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesQuery = 'newstories.json?print=pretty';

export async function fetchNewsFeed() {
  const urlLatestNewsIds = `${baseURL}${newStoriesQuery}`;
  try {
    const latestNewsIds = await fetch(urlLatestNewsIds);
    const newsIds = ((await latestNewsIds.json()) as IDs).slice(0, 100);
    const latestNewsResponces = await Promise.all(
      newsIds.map((itemId) =>
        fetch(`${baseURL}item/${itemId}.json?print=pretty`)
      )
    );
    const latestNews = (await Promise.all(
      latestNewsResponces.map((res) => res.json())
    )) as Story[];

    const newsDataPrepared = addDateStringToAll(latestNews);
    return newsDataPrepared;
  } catch (err) {
    console.log('CATCH');
    if (err instanceof Error) {
      console.warn(err.message);
    }
  }
}

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

export async function fetchComments(commentsIds: number[]) {
  try {
    const rootCommentsResponces = await Promise.all(
      commentsIds.map((commentId) =>
        fetch(`${baseURL}item/${commentId}.json?print=pretty`)
      )
    );
    const rootComments = (await Promise.all(
      rootCommentsResponces.map((res) => res.json())
    )) as HNComment[];
    const commentsPrepared = addDateStringToAll(rootComments) as HNComment[];
    return commentsPrepared;
  } catch (err) {
    console.log('CATCH');
    if (err instanceof Error) {
      console.warn(err.message);
    }
  }
}

//specific helper
export function addDateStringToAll(items: Story[] | HNComment[]) {
  return items.map((item) => {
    item.date = getDateString(item.time);
    return item;
  });
}
