import { Link } from 'react-scroll';

import {
  BagIcon,
  LogoWhiteIcon,
  SearchIcon,
  UserIcon,
} from '../assets/svg/svg-icons';

const UnAuthNavbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-[3.62rem] '>
      <LogoWhiteIcon />

      <div
        className='text-white uppercase flex flex-start gap-[3.75rem] font-medium text-base'
        role='navigation'
        aria-label='Main'
      >
        {['home', 'about', 'contact']?.map((item, index) => (
          <Link
            key={index}
            to={item}
            spy={true}
            smooth={true}
            className='cursor-pointer'
          >
            {item}
          </Link>
        ))}
      </div>

      <div className='flex justify-center items-center gap-[1.5rem]'>
        <SearchIcon />
        <UserIcon />
        <BagIcon />
      </div>
    </nav>
  );
};

export default UnAuthNavbar;
