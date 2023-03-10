import Score from './Score';
import { Story } from '~/types/types';

export default function NewsItem({ newsItem }: { newsItem: Story }) {
  return (
    <article className='p-2 w-[350px] rounded bg-green-200 shadow-md'>
      <h1 className='text-m font-semibold text-left mb-2'>{newsItem.title}</h1>
      <div className='flex gap-1 justify-between items-center'>
        <Score score={newsItem.score} />
        <span className='text-sm'>{newsItem.by}</span>
        <span className='text-sm'>{newsItem.date}</span>
      </div>
    </article>
  );
}
