import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useLoaderData } from 'react-router';
import { useRevalidate } from '~/hooks/useRevalidate';
import { ErrorBoundaryProps, NewsItem, Story } from '~/types/types';
import HNComment from './HNComment';

export default function Comments() {
  const { comments } = useLoaderData() as NewsItem;
  const revalidate = useRevalidate();

  return (
    <section>
      <h2 className='flex items-center'>
        <span>Comments</span>{' '}
        <button
          className='p-2'
          onClick={() => {
            revalidate();
          }}
        >
          <ArrowPathIcon className='w-5 p-1 text-white bg-green-600 rounded' />
        </button>
      </h2>
      <hr className='mb-2' />
      {comments.map((comment) => (
        <HNComment key={comment.by} comment={comment} />
      ))}
    </section>
  );
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <section className='error-message'>
      <h1 className='text-center w-[350px] sm:w-[450px] lg:w-[550px]'>
        Something went wrong during fetching comments{' '}
      </h1>
    </section>
  );
}
