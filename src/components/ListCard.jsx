import { Link } from 'react-router-dom';

import { CartIcon, FavouriteIcon, StarIcon } from '../assets/icons/svg-icons';
import { formatAmount } from '../helpers/formatAmount';
import { shop } from '../utils/routes';

import Button from './bits/Button';

function ListCard({ id, name, price, images, star, description }) {
  return (
    <Link
      to={`${shop}/${id}`}
      className='w-full flex justify-between items-center gap-x-[.5rem] border-[1px] border-gray-4 bg-white h-[10rem] md:h-[12rem] xl:h-[17.25rem] rounded-sm '
    >
      <div className='w-full h-full flex-[45%] flex justify-center items-center bg-accent-3 gap-[0.0625rem] '>
        <img src={images[0].image} alt={name} className='block object-cover ' />
      </div>

      {/* Contents */}
      <div className='w-full flex flex-col gap-[0.4rem] md:gap-y-[0.62rem] p-[0.5rem] pr-[1rem] xl:p-[2rem] '>
        <h4 className='text-color text-base font-semibold leading-1'>{name}</h4>
        <p className='line-clamp-2 xl:line-clamp-none  text-xbase font-lighter leading-1.5 md:leading-2 xl:leading-3 text-color xl:pb-[0.13rem] pb-0 '>
          {description}
        </p>

        <hgroup className='w-full flex justify-between items-center pb-0 xl:pb-[0.63rem] '>
          <h4 className='text-color text-base md:text-md xl:text-lg font-medium leading-1.5 '>
            N{formatAmount(price)}
          </h4>
          <p className='flex text-color text-xbase font-light leading-3 items-center gap-[0.12rem] '>
            <StarIcon />
            <span>{star}</span>
          </p>
        </hgroup>

        <hgroup className='w-full flex justify-between '>
          <Button className='flex items-center justify-center gap-[0.75rem] rounded-sm bg-accent-1 border-accent-1 px-[0.4rem] md:px-[1rem] xl:px-[3rem] py-[0.4rem] xl:py-[0.625rem]  '>
            <CartIcon />
            <span className='text-color font-semibold leading-1 uppercase text-sm md:text-base'>
              add to cart
            </span>
          </Button>
          <Button className='border-none'>
            <FavouriteIcon />
          </Button>
        </hgroup>
      </div>
    </Link>
  );
}

export default ListCard;
