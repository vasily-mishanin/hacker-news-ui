import { json, LoaderArgs, MetaFunction } from '@remix-run/node';
import { Await, Link, useLoaderData } from '@remix-run/react';
import { IDs, Story } from '~/types/types';
const baseURL = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesQuery = 'newstories.json?print=pretty';
const itemQuery = 'item/2921983.json?print=pretty';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'News',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Index() {
  const newsData = useLoaderData<Story[]>();
  return (
    <>
      <header className='pt-5 text-center'>
        <h1>Hacker News</h1>
        <nav>
          <ul>
            {newsData.map((newsItem) => (
              <li>
                <p>
                  {new Date(newsItem.time * 1000).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                </p>
                <p>{newsItem.title}</p>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export async function loader({ request, params }: LoaderArgs) {
  const urlLatestNewsIds = `${baseURL}${newStoriesQuery}`;
  try {
    const latestNewsIds = await fetch(urlLatestNewsIds);
    const newsIds = ((await latestNewsIds.json()) as IDs).slice(0, 100);
    const latestNewsResponces = await Promise.all(
      newsIds.map((itemId) =>
        fetch(`${baseURL}item/${itemId}.json?print=pretty`)
      )
    );
    const latestNews = await Promise.all(
      latestNewsResponces.map((res) => res.json())
    );
    return latestNews;
  } catch (err) {
    console.log('CATCH');
    if (err instanceof Error) {
      console.warn(err.message);
    }
  }
}
