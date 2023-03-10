import { Link } from '@remix-run/react';

export default function BaseHeader({ withBackBtn }: { withBackBtn?: boolean }) {
  return (
    <header className='sticky-header flex justify-center mb-1 w-[100%]'>
      <div className='flex p-5 text-center justify-between items-center w-[350px]'>
        <h1 className=''>
          <span className='text-green-800'>Hacker</span>{' '}
          <span className='text-green-600'>News</span>
        </h1>
        {withBackBtn && <Link to='/'>Back to List</Link>}
      </div>
    </header>
  );
}
