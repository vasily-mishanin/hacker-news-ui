import { ErrorBoundaryComponent } from '@remix-run/node';
import { useEffect, useState } from 'react';
import { fetchComments } from '~/loaders/newsLoaders';
import { ErrorBoundaryProps, HNComment } from '~/types/types';
import { decode, getCuttedString } from '~/utils/helpers';
import CollapsedText from './CollapsedText';

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
    <article className='mb-2'>
      {/* <p className='text-sm'>
        {decodedText && decodedText.length > 0 ? (
          getCuttedString(decodedText, 300)
        ) : (
          <span className='text-red-300'>no comment provided</span>
        )}
      </p> */}
      <CollapsedText text={decodedText} length={100} />
      <div className='flex justify-between'>
        <p>
          <span className='text-xs'>{date}</span>
          <span className='text-xs ml-4'>{by}</span>
        </p>
        {kids && kids.length > 0 && (
          <span
            className='cursor-pointer'
            onClick={() => setShowSubcomments(!showSubcomments)}
          >
            💬
          </span>
        )}
      </div>
      {showSubcomments && (
        <section className='ml-3'>
          Subcomments
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
