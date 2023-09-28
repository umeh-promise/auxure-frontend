import { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '../../assets/icons/svg-icons';

import Button from './Button';
import Wrapper from './Wrapper';

const FilterCard = ({ children, title }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <Wrapper
      fluid
      className='flex py-[2rem] gap-y-[1.5rem] flex-col gap-x-[2.25rem] shrink-0 rounded-[0.25rem] border-b-[1px] border-gray-3 justify-center last-of-type:border-0 '
    >
      <hgroup className='flex justify-between px-[1.5rem] items-center '>
        <h4 className='text-base text-color font-semibold leading-1 uppercase'>
          {title}
        </h4>
        <Button
          className='flex px-[1rem] justify-center items-center gap-[0.625rem] rounded-[1.56rem] border-[1px] border-primary text-color text-sm font-light leading-3 capitalize'
          onClick={() => setIsShow((show) => !show)}
        >
          <span className='text-xbase font-light leading-3 text-color'>
            Hide
          </span>
          {isShow ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </hgroup>
      <hgroup className='flex flex-col gap-[0.75rem] justify-between px-[1.5rem] '>
        {isShow ? children : null}
      </hgroup>
    </Wrapper>
  );
};

export default FilterCard;
