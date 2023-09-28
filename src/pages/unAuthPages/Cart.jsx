import { useMemo, useState } from 'react';

import { TrashIcon } from '../../assets/icons/svg-icons';
import img1 from '../../assets/img/perf1.png';
import CartSummary from '../../components/CartSummary';
import Counter from '../../components/Counter';
import Banner from '../../components/bits/Banner';
import Button from '../../components/bits/Button';
import Input from '../../components/bits/Input';
import Wrapper from '../../components/bits/Wrapper';
import { formatAmount } from '../../helpers/formatAmount';

const cartItems = [
  {
    id: 1,
    name: 'Enchanted Elixir',
    description: 'A captivating blend of rare botanicals and sensual',
    price: '130000',
    img: img1,
  },
  {
    id: 2,
    name: 'Enchanted Elixir',
    description: 'A captivating blend of rare botanicals and sensual',
    price: '120000',
    img: img1,
  },
];

function Cart() {
  const [count, setCount] = useState(1);

  const className = useMemo(
    () => ({
      inputClass:
        'bg-white border-[1px] lg:border-[.125rem] border-primary w-[0.8rem] h-[0.9rem] lg:w-[1.23rem] lg:h-[1.23rem] rounded-[15%] checked:bg-accent-1',
      labelClass: '',
    }),
    []
  );

  return (
    <Wrapper>
      <section className='w-full pt-[1rem] py-[3.06rem] space-y-[3.5rem] '>
        <Banner
          title='SHOP ALL OUR FRAGRANCES'
          text='Don’t miss out on our exclusive fragrances. checkout now!'
        />
        <main className='w-full overflow-x-scroll sm:overflow-x-hidden flex-col gap-[1rem] justify-center items-center '>
          <div className='grid grid-cols-[0.1rem_minmax(2rem,_6rem)_minmax(8rem,_10rem)_minmax(5rem,_6rem)_minmax(4rem,_5rem)_minmax(0.8rem,_1rem)] gap-[1.5rem] md:gap-x-[4rem] text-lighter font-medium md:text-base text-xbase  tracking-wider md:tracking-normal border-b-[1px] border-gray-1 py-[0.5rem] items-center justify-between content-between '>
            <h5></h5>
            <h5>Product</h5>
            <h5></h5>
            <h5>Quantity</h5>
            <h5>Price</h5>
            <h5></h5>
          </div>

          {cartItems?.map(({ id, img, name, price, description }) => (
            <div
              className='grid grid-cols-[0.1rem_minmax(2rem,_6rem)_minmax(8rem,_10rem)_minmax(5rem,_6rem)_minmax(4rem,_5rem)_minmax(0.8rem,_1rem)] gap-[1.5rem] md:gap-[4rem] lg:justify-between text-lighter font-medium md:text-base text-md  tracking-wider md:tracking-normal items-center shadow-sm py-[1rem] px-1 align-left'
              key={id}
            >
              <div className='w-full'>
                <Input
                  type='checkbox'
                  label='label'
                  variant='primary'
                  childrenClass={className}
                  showLabel={false}
                />
              </div>
              <div className=' bg-accent-3 flex items-start  justify-center shadow-sm'>
                <img
                  src={img}
                  alt={name}
                  className='block object-cover h-full lg:w-[3rem] '
                />
              </div>
              <div className='space-y-1 w-full'>
                <h4 className='text-color text-xbase lg:text-md font-medium leading-2'>
                  {name}
                </h4>
                <p className='lg:text-base text-xbase font-light leading-1 text-lighter-1'>
                  {description}
                </p>
              </div>

              <div className='w-full'>
                <Counter count={count} setCount={setCount} />
              </div>

              <p className='text-xbase md:text-base'>
                N{formatAmount(count * price)}
              </p>

              <Button
                title='Remove'
                className='text-accent-4 border-none hover:scale-125'
              >
                <TrashIcon />
              </Button>
            </div>
          ))}
        </main>
        <CartSummary />
      </section>
    </Wrapper>
  );
}

export default Cart;
