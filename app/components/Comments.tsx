import { useLoaderData } from 'react-router';
import { Story } from '~/types/types';

export default function Comments() {
  const newsItem = useLoaderData() as Story;
  console.log('COMMENTS ', newsItem.kids);
  return (
    <section>
      <h2>Comments</h2>
      <h3>Root Comments</h3>
    </section>
  );
}
