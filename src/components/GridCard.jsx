import { Link } from 'react-router-dom';

import { CartIcon, FavouriteIcon, StarIcon } from '../assets/icons/svg-icons';
import { formatAmount } from '../helpers/formatAmount';

import Button from './bits/Button';

function GridCard({ id, name, price, images, star }) {
  return (
    <Link
      to={`${id}`}
      className='w-full flex flex-col justify-between items-center gap-[0.75rem] border-[1px] border-gray-4 bg-white rounded-t-md '
    >
      <div className='w-full flex flex-col justify-end py-[.2rem] items-center bg-accent-3 gap-[0.0625rem] h-[12rem]'>
        <img src={images[0].image} alt={name} className='block object-cover ' />
      </div>
      <div className='w-full flex flex-col gap-y-[1rem] pt-[0.5rem] pb-[0.75rem] px-[0.75rem] '>
        <hgroup className='w-full flex justify-between items-center '>
          <h4 className='text-color text-base font-medium leading-1'>{name}</h4>
          <p className='flex text-color text-xbase font-light leading-3 items-center gap-[0.12rem] '>
            <StarIcon />
            <span>{star}</span>
          </p>
        </hgroup>
        <hgroup className='w-full flex justify-between items-center '>
          <h3 className='text-color text-md font-semibold leading-2 '>
            N{formatAmount(price)}
          </h3>
          <Button className='border-none'>
            <FavouriteIcon />
          </Button>
        </hgroup>
        <Button className='w-full flex py-[0.66rem] items-center justify-center gap-[0.75rem] rounded-[0.25rem] bg-accent-1 border-accent-1 '>
          <CartIcon />
          <span className='text-color font-semibold leading-1 uppercase text-base'>
            add to cart
          </span>
        </Button>
      </div>
    </Link>
  );
}

export default GridCard;
