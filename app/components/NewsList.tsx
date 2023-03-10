import { Link, useLoaderData } from '@remix-run/react';
import { Story } from '~/types/types';
import NewsItem from './NewsItem';

export default function NewsList() {
  const newsData = useLoaderData<Story[]>();

  return (
    <ul className='flex flex-col items-center gap-3'>
      {newsData.map((newsItem) => (
        <li key={newsItem.id}>
          <Link to={newsItem.id.toString()}>
            <NewsItem newsItem={newsItem} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
