import { useMemo } from 'react';

import Filter from './Filter';
import FilterCard from './bits/FilterCard';
import Input from './bits/Input';
import Wrapper from './bits/Wrapper';

const Sidebar = ({ showFilter }) => {
  const className = useMemo(
    () => ({
      inputClass:
        'bg-white border-[.125rem] border-color w-[1.23rem] h-[1.23rem] rounded-[15%] ',
      labelClass:
        'w-[1.23rem] h-[1.23rem] text-xbase font-light leading-3 text-color ',
    }),
    []
  );

  return (
    <Wrapper
      fluid
      className={`w-full  ${
        showFilter
          ? 'block absolute bg-white min-h-screen left-0  z-10'
          : 'hidden'
      } lg:static lg:block flex-[40%] xl:flex-[25%] border-[1px] border-gray-3 [&>div]:border-b-[1px] [&>div]:rounded-none [&>div]:border-b-gray-3`}
    >
      <Filter />
      <FilterCard title='Fragrance'>
        {[
          'Floral',
          'Citrus',
          'Woody',
          'Oriental',
          'Aquatic',
          'Spicy',
          'Green',
        ]?.map((label) => (
          <Input
            type='checkbox'
            label={label}
            key={label}
            variant='primary'
            childrenClass={className}
          />
        ))}
      </FilterCard>

      <FilterCard title='Gender'>
        {['Male', 'Female']?.map((label) => (
          <Input
            type='checkbox'
            label={label}
            key={label}
            variant='primary'
            childrenClass={className}
          />
        ))}
      </FilterCard>

      <FilterCard title='Price'>
        {[
          'N2,000 - N10,000',
          'N10,000 - N50,000',
          'N50,000 - N200,000',
          'Over N200,000',
        ]?.map((label) => (
          <Input
            type='radio'
            label={label}
            key={label}
            name='price'
            variant='secondary'
            defaultChecked
          />
        ))}
        {/* Set Price range */}
        <div className='flex flex-col'>
          <hgroup className='w-[80%] flex gap-[0.62rem] pt-[1rem] items-center '>
            <Input
              type='text'
              label='Min'
              className='flex flex-col-reverse max-w-[5rem] '
              showLabel={false}
            />

            <span className=' block w-[0.625rem] h-[0.0625rem] bg-color' />

            <Input
              type='text'
              label='Max'
              className='flex flex-col-reverse max-w-[5rem] pb-0 '
              showLabel={false}
            />
          </hgroup>
          <hgroup className='w-[65%] flex gap-[2rem]  items-center justify-center text-color font-light leading-3 text-xbase '>
            <span>Min</span>
            <span></span>
            <span>Max</span>
          </hgroup>
        </div>
      </FilterCard>
    </Wrapper>
  );
};

export default Sidebar;
