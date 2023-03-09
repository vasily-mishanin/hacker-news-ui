import { LoaderArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import NewsItemDetails from '~/components/NewsItemDetails';
import { fetchNewsItem, fetchRootComments } from '~/loaders/newsLoaders';

export default function NewsItemDetailsPage() {
  return (
    <>
      <header className='sticky-header flex justify-center mb-1 w-[100%]'>
        <div className='flex p-5 text-center justify-between items-center w-[350px]'>
          <h1 className=''>
            <span className='text-green-800'>Hacker</span>{' '}
            <span className='text-green-600'>News</span>
          </h1>
          <Link to='/'>Back to List</Link>
        </div>
      </header>

      <main>
        <NewsItemDetails />
      </main>
    </>
  );
}

export async function loader({ params }: LoaderArgs) {
  const { newsItemId } = params;
  if (newsItemId) {
    try {
      const newsItem = await fetchNewsItem(newsItemId);
      const commentsIds = newsItem?.kids;
      if (newsItem && commentsIds) {
        const comments = await fetchRootComments(commentsIds);
        return { newsItem, comments };
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  }
  return newsItemId;
}
