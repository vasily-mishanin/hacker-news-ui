//import IconStar from '../assets/star.svg';

export default function BadgeComments({ amount }: { amount: number }) {
  return (
    <div className='flex items-center'>
      {/* <img src={IconStar} alt='amount' /> */}
      💬 <span className='ml-1 text-xs'>{amount}</span>
    </div>
  );
}
