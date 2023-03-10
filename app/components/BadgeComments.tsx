//import IconStar from '../assets/star.svg';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function BadgeComments({
  amount,
  clickable,
}: {
  amount?: number;
  clickable?: boolean;
}) {
  const clickableClass = clickable ? 'text-green-500' : '';

  return (
    <div className='flex items-center'>
      {/* <img src={IconStar} alt='amount' /> */}

      <ChatBubbleLeftRightIcon className={`w-4 ${clickableClass}`} />

      {amount && <span className='ml-1 text-xs'>{amount}</span>}
    </div>
  );
}
