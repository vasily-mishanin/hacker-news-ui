export default function BaseHeader() {
  return (
    <header className='sticky-header flex justify-center mb-1 w-[100%]'>
      <div className='flex p-5 text-center justify-between items-center w-[350px]'>
        <h1>
          <span className='text-green-800'>Hacker</span>{' '}
          <span className='text-green-600'>News</span>
        </h1>
      </div>
    </header>
  );
}
