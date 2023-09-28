import img1 from '.././assets/img/perf_2.png';
import { BinIcon } from '../assets/icons/svg-icons';

import Button from './bits/Button';
import Input from './bits/Input';
import OrderQuantity from './bits/OrderQuantity';

const OrderSummary = () => {
  return (
    <div className='w-full flex-[100%] lg:flex-[35%] bg-white px-[.25rem] md:px-[2rem] py-[0.62rem] md:py-[3rem] flex flex-col items-start gap-[1rem] xl:gap-[3rem] rounded-[0.625rem]'>
      <h3 className='text-lg md:text-xl font-medium leading-1 text-lighter'>
        Order Summary
      </h3>
      <div className='w-full flex flex-col gap-[1.62rem] md:gap-[2.25rem]'>
        <hgroup className='flex w-full justify-between items-center text-lighter border-b-[1px] border-gray-1 py-[0.75rem] gap-[1rem] md:gap-[1rem] '>
          <span className='flex items-center justify-center relative w-[4rem] h-[4rem] bg-background-color border-solid outline-none border-[#324b6d1a] border-[0.52px] '>
            <img src={img1} alt='' className='block h-full object-fit' />
            <OrderQuantity className='w-[1rem] md:w-[1.5rem] h-[1rem] md:h-[1.5rem] text-sm md:text-[0.875rem] top-[-0.5rem] md:left-[2.9rem] lg:left-[2.3rem] xl:left-[3.06rem]' />
          </span>

          <span className='flex flex-auto lg:flex-initial flex-col md:gap-[0.62rem]'>
            <h4 className='text-base text-lighter font-medium leading-0.5 '>
              Enchanted Elixir
            </h4>

            <p className='text-[0.875rem] text-gray font-light leading-0.5'>
              Oriental
            </p>
          </span>

          <p className='text-base flex-auto md:text-center md:text-md font-semibold leading-2'>
            N250,000
          </p>
          <BinIcon className='block h-[1.5rem] w-[1.5rem] cursor-pointer' />
        </hgroup>
        {/* Gift coupon */}
        <form className='w-full flex gap-[1rem] '>
          <Input
            showLabel={false}
            type='text'
            label='Gift'
            placeholder='Gift or discount code'
            className='flex-[70%] text-sm'
            required
          />
          <Button className='flex-[30%] border-gray bg-gray outline-none py-[0.81rem] px-[1.44rem] text-accent-2 text-base font-medium leading-0.5 '>
            Apply
          </Button>
        </form>
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
      </div>
    </div>
  );
};

export default OrderSummary;
