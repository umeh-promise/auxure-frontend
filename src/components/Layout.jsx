import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ArrowRightIcon } from '../assets/icons/svg-icons';

import Footer from './Footer';
import Navbar from './Navbar';
import Wrapper from './bits/Wrapper';

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleBtnVisibility = () => {
      window.scrollY > 150 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleBtnVisibility);

    return () => {
      window.removeEventListener('scroll', handleBtnVisibility);
    };
  });

  return (
    <Wrapper fluid>
      <Wrapper>
        <Navbar color='fill-color' />
      </Wrapper>

      <Outlet />

      <Footer />

      {showButton && (
        <aside
          className='z-[999] fixed flex items-center justify-center bg-primary hover:bg-accent-1 px-[1rem] py-[1.2rem] right-[1rem] md:right-[3rem] bottom-[1rem] md:bottom-[3rem] cursor-pointer rounded-[0.15rem] opacity-[0.75] hover:opacity-[1] transition-all duration-300'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRightIcon className='rotate-[270deg]' />
        </aside>
      )}
    </Wrapper>
  );
};

export default Layout;
