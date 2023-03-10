import Score from './Score';
import { ErrorBoundaryProps, Story } from '~/types/types';

export default function NewsItem({ newsItem }: { newsItem: Story }) {
  return (
    <article className='p-2  rounded bg-green-200 shadow-md w-[350px] sm:w-[450px] lg:w-[550px]'>
      <h1 className='text-m font-semibold text-left mb-2'>{newsItem.title}</h1>
      <div className='flex gap-1 justify-between items-center'>
        <Score score={newsItem.score} />
        <span className='text-sm'>{newsItem.by}</span>
        <span className='text-sm'>{newsItem.date}</span>
      </div>
    </article>
  );
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <article className='p-2  rounded bg-green-200 shadow-md w-[350px] sm:w-[450px] lg:w-[550px]'>
      <h1 className='text-m font-semibold text-left mb-2'>
        Something wrong with this news item
      </h1>
    </article>
  );
}
