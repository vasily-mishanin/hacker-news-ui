import { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import NewsList from '~/components/NewsList';
import { useRevalidate } from '~/hooks/useRevalidate';
import { fetchNewsFeed } from '~/loaders/newsLoaders';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import LogoLink from '~/components/LogoLink';
const REFRESH_TIME = 60 * 1000;

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'News',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Index() {
  const revalidate = useRevalidate();

  useEffect(() => {
    const updateInterval = setInterval(revalidate, REFRESH_TIME);
    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <>
      <header className='sticky-header flex justify-center mb-1 w-[100%]'>
        <div className='flex p-5 text-center justify-between items-center w-[350px] sm:w-[450px] lg:w-[550px]'>
          <LogoLink />
          <button className='p-2' onClick={() => revalidate()}>
            <ArrowPathIcon className=' w-8 p-1 text-white bg-green-800 rounded' />
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
