import { useEffect, useState } from 'react';
import { fetchComments } from '~/loaders/newsLoaders';
import { ErrorBoundaryProps, HNComment } from '~/types/types';
import { decode } from '~/utils/helpers';
import CollapsedText from './CollapsedText';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import BadgeComments from './BadgeComments';

export default function HNComment({ comment }: { comment: HNComment }) {
  const { text, date, by, kids } = comment;
  const [showSubcomments, setShowSubcomments] = useState(false);
  const [subcomments, setSubcomments] = useState<HNComment[] | undefined>([]);

  useEffect(() => {
    const getSubcommments = async () => {
      if (showSubcomments && kids && Array.isArray(kids) && kids.length > 0) {
        const comments = await fetchComments(kids);
        setSubcomments(comments);
      }
    };
    getSubcommments();
    return () => {};
  }, [showSubcomments]);

  let decodedText = decode(text);

  return (
    <article className='mb-4'>
      <CollapsedText text={decodedText} length={100} />
      <div className='flex justify-between'>
        <p>
          <span className='text-xs bold'>{by}</span>
          <span className='text-xs ml-4 opacity-40'>{date}</span>
        </p>
        {kids && kids.length > 0 && (
          <span
            className='cursor-pointer'
            onClick={() => setShowSubcomments(!showSubcomments)}
          >
            <BadgeComments clickable />
          </span>
        )}
      </div>
      {showSubcomments && (
        <section className='ml-3'>
          <ArrowUpIcon className='w-4' />
          {subcomments?.map((subcomment) => (
            <HNComment key={subcomment.id} comment={subcomment} />
          ))}
        </section>
      )}
    </article>
  );
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <section>
      <p> Broken comment </p>
    </section>
  );
}
