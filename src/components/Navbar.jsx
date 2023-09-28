import { useState } from 'react';
import { Link as LinkR, NavLink, useNavigate } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import {
  BagIcon,
  BarIcon,
  CloseIcon,
  LogoWhiteIcon,
  SearchIcon,
  UserIcon,
} from '../assets/icons/svg-icons';
import { cart, home, login, shop } from '../utils/routes';

import OrderQuantity from './bits/OrderQuantity';

const Navbar = ({ color }) => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='w-full flex items-center justify-between py-[2rem] md:py-[3.62rem]'>
      <LogoWhiteIcon
        className={`z-30 cursor-pointer ${color}`}
        onClick={() => navigate(home)}
      />

      <ul
        className={`md:relative md:flex md:flex-row flex-start md:gap-[1.75rem] lg:gap-[3.75rem] md:bg-transparent md:pt-0 md:pb-0 z-20 transition-all duration-300 md:opacity-100 ${
          showMobileNavbar
            ? 'flex flex-col fixed left-0 top-0 right-0 bg-[#a27838fb] gap-[2rem] pt-[6.5rem] pb-[2.3rem] px-[.3rem] rounded-b-lg  translate-y-0 opacity-100 h-auto'
            : 'opacity-0 h-0 -translate-y-full'
        }`}
        role='navigation'
        aria-label='main'
      >
        <CloseIcon
          className='md:hidden absolute right-4 top-4 cursor-pointer '
          onClick={() => setShowMobileNavbar(false)}
        />

        {/* {['shop', 'about', 'contact']?.map((item, index) => (
          <li
            key={index}
            className={`nav_link-items transition-add text-${
              color.split('-')[1]
            } `}
          >
            <NavLink
              to={item}
              // spy={true}
              // smooth={true}
              onClick={() => setShowMobileNavbar(false)}
            >
              {item}
            </NavLink>
          </li>
        ))} */}

        <li
          className={`nav_link-items transition-add text-${
            color.split('-')[1]
          } `}
        >
          <NavLink
            to={shop}
            // spy={true}
            // smooth={true}
            onClick={() => setShowMobileNavbar(false)}
          >
            shop
          </NavLink>
        </li>

        {['about', 'contact']?.map((item, index) => (
          <li
            key={index}
            className={`nav_link-items transition-add text-${
              color.split('-')[1]
            } `}
          >
            <LinkS
              to={item}
              spy={true}
              smooth={true}
              onClick={() => setShowMobileNavbar(false)}
            >
              {item}
            </LinkS>
          </li>
        ))}

        {socialIcons(true, color)}
      </ul>

      {socialIcons(false, color)}

      <BarIcon
        className={`md:hidden ${color} ${showMobileNavbar && 'hidden'}`}
        onClick={() => setShowMobileNavbar(true)}
      />
    </nav>
  );
};

const socialIcons = (showMobileSocialIcons, color) => (
  <span
    className={` ${
      showMobileSocialIcons ? 'md:hidden flex' : 'md:flex hidden'
    }  justify-center items-center gap-[1.5rem]`}
  >
    <SearchIcon className={`transition-add ${color}`} />
    <LinkR to={login} className='transition-add'>
      <UserIcon className={color} />
    </LinkR>
    <LinkR to={cart} className='relative transition-add'>
      <BagIcon className={color} />
      <OrderQuantity className='w-[1.25rem] h-[1.25rem] right-[-0.4rem] top-[-0.3rem] text-[0.875rem]' />
    </LinkR>
  </span>
);

export default Navbar;
