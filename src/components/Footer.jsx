import { Link } from 'react-router-dom';

import {
  ArrowRightIcon,
  AuxureLogoIcon,
  FacebookIcon,
  LinkedIcon,
  LogoIcon,
  TwitterIcon,
} from '../assets/svg/svg-icons';

const Footer = () => {
  return (
    <footer
      className='w-full bg-accent-2 px-[1.5625rem] py-[6.375rem] pb-[1.41269rem] flex flex-col items-center justify-center gap-[4.5rem]'
      id='contact'
    >
      <hgroup className=' w-[78vw] mx-auto flex justify-between text-primary '>
        <LogoIcon />
        <div>
          <h4 className='mb-[2rem] leading-[1.75rem] font-semibold text-md'>
            Quick Links
          </h4>

          <span className='grid grid-cols-2 gap-[2rem] text-base leading-3 opacity-[0.65]'>
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
          <h4 className='mb-[2rem] leading-[1.75rem] font-semibold text-md'>
            Subscribe
          </h4>
          <hgroup className='flex items-center border-[1.5px] border-[#d4b483] rounded-md overflow-hidden'>
            <input
              type='text'
              placeholder='Get product updates'
              className='text-accent-4 px-[1.03rem] py-[0.94rem] leading-2 opacity-[0.65] text-sm outline-0'
            />
            <span className='self-stretch flex items-center justify-center bg-accent-1 px-[1.19rem] py-[1.2rem]'>
              <ArrowRightIcon />
            </span>
          </hgroup>
        </div>
      </hgroup>
      <AuxureLogoIcon />
      <hgroup className='w-[78vw] mx-auto flex flex-col justify-between text-primary gap-[2.19rem]'>
        <span className='w-full  opacity-[0.5rem] bg-[text-accent-4] border-[1px] border-[text-accent-4] border'></span>
        <div className='flex gap-[43.12rem]'>
          <span className='flex gap-[0.625rem]'>
            <LinkedIcon />
            <FacebookIcon />
            <TwitterIcon />
          </span>
          <p className='text-base font-primary font-light'>
            © 2023 Auxure. All rights reserved
          </p>
        </div>
      </hgroup>
    </footer>
  );
};

export default Footer;
