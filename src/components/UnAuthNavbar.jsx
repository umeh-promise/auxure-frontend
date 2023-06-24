import { Link } from 'react-router-dom';
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
        <Link to='#'>Shop</Link>
        <Link to='#'>About</Link>
        <Link to='#'>Contact</Link>
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
