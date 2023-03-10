import { useLoaderData } from 'react-router';
import { ErrorBoundaryProps, NewsItem, Story } from '~/types/types';
import HNComment from './HNComment';

export default function Comments() {
  const { comments } = useLoaderData() as NewsItem;
  console.log('COMMENTS ', comments);

  return (
    <section>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <HNComment key={comment.by} comment={comment} />
      ))}
    </section>
  );
}

// export function ErrorBoundary({ error }: ErrorBoundaryProps) {
//   return (
//     <section>
//       Comment is broken <p>{error.message}</p>
//     </section>
//   );
// }
