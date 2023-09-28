import { useState } from 'react';

import { ChevronDownIcon } from '../assets/icons/svg-icons';

import Wrapper from './bits/Wrapper';

function ProductAccordian({ children, title }) {
  const [show, setShow] = useState(true);
  return (
    <Wrapper>
      <hgroup className='flex justify-between items-center border-b-[1px] pt-[1.56rem] pb-[1rem] border-gray-4'>
        <h4 className='text-lighter text-base md:text-md font-semibold leading-1.5 uppercase '>
          {title}
        </h4>

        <ChevronDownIcon
          className={`cursor-pointer ${show && 'rotate-180'}`}
          onClick={() => setShow((show) => !show)}
        />
      </hgroup>
      {show && (
        <div className='text-lighter text-xbase md:text-base font-light leading-2 pt-[1rem] '>
          {children}
        </div>
      )}
    </Wrapper>
  );
}

export default ProductAccordian;
