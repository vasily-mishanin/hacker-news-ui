import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Story } from '~/types/types';
import { getCuttedString } from '~/utils/helpers';
import BadgeComments from './BadgeComments';
import Comments from './Comments';

export default function NewsItemDetails() {
  const newsItem = useLoaderData<Story>();

  return (
    <article className='p-5 flex flex-col gap-2 w-[350px]'>
      <header>
        <h1 className='mb-2 text-xl'>{newsItem.title}</h1>
        <a className='text-blue-500 text-sm' href={newsItem.url}>
          {getCuttedString(newsItem.url, 40)}
        </a>
      </header>
      <div className='flex gap-1 justify-between items-center'>
        <span className='text-sm'>{newsItem.date}</span>
        <span>{newsItem.by}</span>
        <BadgeComments amount={newsItem.descendants} />
      </div>
      <Comments />
    </article>
  );
}

/* 
⁃ ссылку на новость
 ⁃ заголовок новости
 ⁃ дату
 ⁃ автора
 ⁃ счётчик количества комментариев
 ⁃ список комментариев в виде дерева
  */

// load root comments
//  export function loader({request, params}:LoaderArgs){

//  }
