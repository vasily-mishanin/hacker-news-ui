import { LoaderArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import BaseHeader from '~/components/BaseHeader';
import NewsItemDetails from '~/components/NewsItemDetails';
import { fetchNewsItem, fetchComments } from '~/loaders/newsLoaders';
import { ErrorBoundaryProps, HNComment, NewsItem } from '~/types/types';

export default function NewsItemDetailsPage() {
  return (
    <>
      <BaseHeader withBackBtn />
      <main>
        <NewsItemDetails />
      </main>
    </>
  );
}

export async function loader({ params }: LoaderArgs) {
  const newsItemId = params.newsItemId;
  if (newsItemId) {
    try {
      console.log('LOADER');
      const newsItem = await fetchNewsItem(newsItemId);
      let comments: HNComment[] = []; // may be no comments

      if (newsItem?.kids) {
        comments = (await fetchComments(newsItem?.kids)) || [];
      }

      if (newsItem && comments) {
        console.log('LOADER', comments);
        return { newsItem, comments };
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  }
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <>
      <BaseHeader withBackBtn />
      <article className='p-2 w-[350px] rounded bg-green-200 shadow-md'>
        <h1 className='text-m font-semibold text-left mb-2'>
          Something wrong with this news item
        </h1>
      </article>
    </>
  );
}
