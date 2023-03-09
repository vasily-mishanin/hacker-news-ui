import { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import NewsList from '~/components/NewsList';
import { useRevalidate } from '~/hooks/useRevalidate';
import { addDateStringToAll } from '~/loaders/newsLoaders';
import { IDs, Story } from '~/types/types';
const baseURL = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesQuery = 'newstories.json?print=pretty';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'News',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Index() {
  const revalidate = useRevalidate();

  // useEffect(() => {
  //   const updateInterval = setInterval(revalidate, 3000);
  //   return () => {
  //     clearInterval(updateInterval);
  //   };
  // }, []);

  return (
    <>
      <header className='sticky-header flex justify-center mb-1 w-[100%]'>
        <div className='flex p-5 text-center justify-between items-center w-[350px]'>
          <h1>
            <span className='text-green-800'>Hacker</span>{' '}
            <span className='text-green-600'>News</span>
          </h1>
          <button className='' onClick={() => revalidate()}>
            Update
          </button>
        </div>
      </header>
      <main>
        <NewsList />
      </main>
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
