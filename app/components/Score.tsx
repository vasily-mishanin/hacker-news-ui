import IconStar from '../assets/star.svg';

export default function Score({ score }: { score: number }) {
  return (
    <div className='flex items-center'>
      <img src={IconStar} alt='score' />
      <span className='ml-1 text-xs'>{score}</span>
    </div>
  );
}
