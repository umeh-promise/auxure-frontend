import { Link } from 'react-router-dom';

import {
  ArrowRightIcon,
  AuxureLogoIcon,
  FacebookIcon,
  LinkedIcon,
  LogoIcon,
  TwitterIcon,
} from '../assets/icons/svg-icons';

import Wrapper from './bits/Wrapper';

const Footer = () => {
  return (
    <footer
      className='w-full bg-accent-2 px-[1.56rem] py-[1.94rem] md:py-[3.15rem] lg:pt-[6.38rem] pb-[1.41rem] flex flex-col items-center justify-center md:gap-[4rem] lg:gap-[4.5rem] gap-[2.5rem]'
      id='contact'
    >
      <Wrapper className='flex justify-between text-primary lg:flex-row flex-col gap-[1.5rem] md:gap-[2.4rem]'>
        <LogoIcon className='mb-[1rem] lg:mb-auto' />
        <div>
          <h4 className='mb-[0.94rem] md:mb-[1.4rem] lg:mb-[2rem] leading-[1.75rem] font-semibold text-md md:text-lg'>
            Quick Links
          </h4>

          <span className='grid grid-cols-2 gap-[0.94rem] md:gap-[1.4rem] lg:gap-[2rem] text-base leading-3 opacity-[0.65] font-light md:font-lighter'>
            {['Product', 'Informaion', 'Company', 'Lift Media']?.map(
              (item, index) => (
                <Link key={index} to='#'>
                  {item}
                </Link>
              )
            )}
          </span>
        </div>
        <div>
          <h4 className='mb-[0.94rem] md:mb-[1.4rem] lg:mb-[2rem] leading-[1.75rem] font-semibold text-md md:text-lg'>
            Subscribe
          </h4>
          <hgroup className='flex items-center border-[1.5px] border-[#d4b483] rounded-lg overflow-hidden'>
            <input
              type='text'
              id='get-updates'
              placeholder='Get product updates'
              className='text-accent-4 px-[1.03rem] py-[0.94rem] leading-2 opacity-[0.65] text-sm outline-0 w-full'
            />
            <label
              htmlFor='get-updates'
              className='self-stretch flex items-center justify-center bg-accent-1 px-[1.19rem] py-[1.2rem] cursor-pointer'
            >
              <ArrowRightIcon />
            </label>
          </hgroup>
        </div>
      </Wrapper>

      <AuxureLogoIcon className='w-full h-fit object-cover' />
      <Wrapper className='flex flex-col justify-between text-primary md:gap-[2.19rem] gap-[1rem]'>
        <span className='w-full opacity-[0.5rem] bg-[text-accent-4] border-[1px] border-[text-accent-4] border-style'></span>
        <div className='flex xl:gap-[43.12rem] md:justify-between gap-[.87rem] md:flex-row flex-col items-center md:items-start '>
          <span className='flex gap-[0.625rem]'>
            <LinkedIcon />
            <FacebookIcon />
            <TwitterIcon />
          </span>
          <p className='text-base font-primary font-light md:font-lighter'>
            © 2023 Auxure. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
