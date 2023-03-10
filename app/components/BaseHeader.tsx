import { Link } from '@remix-run/react';
import LogoLink from './LogoLink';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function BaseHeader({ withBackBtn }: { withBackBtn?: boolean }) {
  return (
    <header className='sticky-header flex justify-center mb-1 w-[100%]'>
      <div className='flex p-5 text-center justify-between items-center w-[350px]'>
        <LogoLink />
        {withBackBtn && (
          <Link to='/'>
            <ArrowUturnLeftIcon className=' w-8 p-1 text-white bg-green-800 rounded' />
          </Link>
        )}
      </div>
    </header>
  );
}
