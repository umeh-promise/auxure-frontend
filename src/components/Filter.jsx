import Button from './bits/Button';

const Filter = () => {
  return (
    <div className='flex justify-center py-[2rem] flex-col gap-[2.25rem] shrink-0 rounded-[0.25rem]  '>
      <hgroup className='flex justify-between px-[1.5rem] items-center '>
        <h4 className='text-base text-color font-semibold leading-1 uppercase'>
          Filter
        </h4>
        <Button className='flex px-[1rem] justify-center items-center gap-[0.625rem] rounded-[1.56rem] border-[1px] border-primary text-color text-xbase font-light leading-3 capitalize'>
          Reset
        </Button>
      </hgroup>
    </div>
  );
};

export default Filter;
