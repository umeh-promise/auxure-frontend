import Button from './bits/Button';

function Counter({ count, setCount }) {
  const increment = () => setCount((count) => count + 1);
  const decrement = () => count > 1 && setCount((count) => count - 1);

  return (
    <div className='flex items-center gap-[0.5rem]'>
      <Button
        className='rounded-md w-[1rem] py-1 lg:py-2 px-[0.8rem] lg:px-[1.1rem] text-base lg:text-lg hover:bg-accent-1 hover:border-accent-1 hover:scale-105 select-none'
        onClick={decrement}
      >
        -
      </Button>
      <span className='flex items-center justify-between text-xbase md:text-base'>
        {count}
      </span>
      <Button
        className='rounded-md w-[1rem] py-1 lg:py-2 px-[0.8rem] lg:px-[1.1rem] text-xbase lg:text-lg hover:bg-accent-1 hover:border-accent-1 hover:scale-105 select-none'
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
