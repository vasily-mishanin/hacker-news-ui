import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import NewsList from '~/components/NewsList';
import { useRevalidate } from '~/hooks/useRevalidate';
import { addDateStringToAll, fetchNewsFeed } from '~/loaders/newsLoaders';
import { ErrorBoundaryProps, IDs, Story } from '~/types/types';
import BaseHeader from '~/components/BaseHeader';
const REFRESH_TIME = 60 * 1000;

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'News',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Index() {
  console.log('INDEX');
  const revalidate = useRevalidate();

  useEffect(() => {
    const updateInterval = setTimeout(revalidate, REFRESH_TIME);
    return () => {
      clearTimeout(updateInterval);
    };
  }, []);

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
  const data = await fetchNewsFeed();
  return data;
}
