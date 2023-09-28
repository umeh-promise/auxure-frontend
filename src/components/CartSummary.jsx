import { useNavigate } from 'react-router-dom';

import { checkout } from '../utils/routes';

import Button from './bits/Button';
import Wrapper from './bits/Wrapper';

function CartSummary() {
  const navigate = useNavigate();

  return (
    <Wrapper
      fluid
      className='bg-white px-[.25rem] md:px-[2rem] py-[0.62rem] md:py-[3rem] flex flex-col items-start gap-[1rem] xl:gap-[3rem] rounded-[0.625rem] mt-[3rem] '
    >
      <h3 className='text-lg md:text-xl font-medium leading-1 text-lighter'>
        Cart Summary
      </h3>
      <div className='w-full flex flex-col gap-[1.62rem] md:gap-[2.25rem]'>
        <hgroup className='w-full flex flex-col gap-[0.75rem] text-lighter [&>span>p]:text-lighter-1 border-y-[1px] border-gray-1 py-[0.75rem]'>
          <span className='w-full flex justify-between'>
            <p className='text-base font-medium leading-3'>Subtotal :</p>
            <b className='text-md font-semibold leading-2'>N250,000</b>
          </span>
          <span className='w-full flex justify-between'>
            <p className='text-base font-medium leading-3'>Shipping :</p>
            <b className='text-md font-semibold leading-2'>N3,000</b>
          </span>
          <span className='w-full flex justify-between'>
            <p className='text-base font-medium leading-3'>VAT (0.75%) :</p>
            <b className='text-md font-semibold leading-2'>N1,875</b>
          </span>
        </hgroup>
        <hgroup className='w-full flex justify-between text-lighter py-[0.75rem] items-center [&>p]:text-lighter-1'>
          <p className='textbase font-medium leading-0.5'>Total :</p>
          <b className='text-lg md:text-xl font-medium leading-1'>N254,875</b>
        </hgroup>
        <Button
          className='border-none bg-accent-1 py-[1rem] px-[2.87rem] uppercase text-md leading-1 text-lighter font-medium '
          onClick={() => navigate(checkout)}
        >
          Proceed to checkout
        </Button>
      </div>
    </Wrapper>
  );
}

export default CartSummary;
