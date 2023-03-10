import { Link } from '@remix-run/react';

export default function LogoLink() {
  return (
    <h1>
      <Link to='/'>
        <span className='text-green-800'>Hacker</span>{' '}
        <span className='text-green-600'>News</span>
      </Link>
    </h1>
  );
}
