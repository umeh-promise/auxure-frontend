import { useState } from 'react';

import { ChevronDownIcon, StarFilledIcon } from '../assets/icons/svg-icons';

import ReviewCard from './ReviewCard';
import Button from './bits/Button';

function Reviews() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full '>
      <h4 className='my-[2rem] text-lighter text-md font-semibold leading-1.5 uppercase '>
        Reviews
      </h4>
      <div className='flex items-start gap-[2.5rem] md:gap-[1rem] lg:gap-0 flex-col md:flex-row justify-between'>
        <hgroup className='space-y-0.5'>
          <p className='text-color text-md font-medium leading-2'>
            Total Reviews
          </p>
          <p className='text-lighter text-xl font-medium leading-1'>10.5K</p>
          <p className='text-base font-light leading-1 text-lighter-1'>
            Yearly growth review
          </p>
        </hgroup>
        <hgroup className='space-y-0.5'>
          <p className='text-color text-md font-medium leading-2'>
            Average Ratings
          </p>
          <hgroup className='text-lighter text-xl font-medium leading-1 '>
            <p className='flex items-center gap-[0.5rem]'>
              <span>4.7</span>
              <span className='flex gap-[0.3rem] '>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarFilledIcon key={i} />
                ))}
              </span>
            </p>
          </hgroup>
          <p className='text-base font-light leading-1 text-lighter-1'>
            Yearly average rating in review
          </p>
        </hgroup>
        <hgroup className='space-y-0.5'>
          <p className='text-color text-md font-medium leading-2'>
            Total Reviews
          </p>
          <p className='text-lighter text-xl font-medium leading-1'>10.5K</p>
          <p className='text-base font-light leading-1 text-lighter-1'>
            Yearly growth review
          </p>
        </hgroup>
      </div>

      <ReviewCard showMore={showMore} />

      <div className='w-full flex gap-[0.5rem] items-center justify-center  cursor-pointer'>
        <Button
          className='bg-accent-2 px-2 py-2 flex gap-[0.5rem] items-center justify-center hover:bg-grey-4  text-lighter border-none rounded-md'
          onClick={() => setShowMore((show) => !show)}
        >
          <span className='font-base font-medium leading-1 '>
            {showMore ? 'Show less reviews' : 'Show all reviews'}
          </span>
          <ChevronDownIcon className={showMore ? 'rotate-180' : ''} />
        </Button>
      </div>
    </div>
  );
}

export default Reviews;
