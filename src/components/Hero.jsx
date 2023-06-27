import { ArrowCircleWhiteIcon } from '../assets/svg/svg-icons';

import UnAuthNavbar from './UnAuthNavbar';

const Hero = () => {
  return (
    <section
      className="w-full h-[65rem] bg-[url('./assets/img/auxure-bg.png')] md:bg-cover bg-no-repeat"
      role='banner'
    >
      <hgroup className='w-[78vw] mx-auto flex flex-col gap-[5rem] items-start'>
        <UnAuthNavbar />
        <header className='text-white uppercase'>
          {/* <h1 className='discover font-bold text-3xl leading-1'>
            Discover The Essence Of Timeless 
          </h1> */}
          <hgroup className='wrapper mb-[3.32rem] font-secondary'>
            {'Discover The Essence Of Timeless'
              .split(' ')
              .map((word, index) => (
                <span
                  key={index}
                  className='font-bold text-3xl leading-1.5'
                  role='heading'
                >
                  <span className='first-letter'>{word.charAt(0)}</span>
                  <span className=''>{word.slice(1)} </span>
                </span>
              ))}
            <span
              className='relative text-2xl font-black leading-1 inline-block border-y-[.125rem] border-color-primary svg-container px-[0.62rem] pt-[0.75rem] pb-[0.375rem]'
              role='heading'
            >
              Luxury
            </span>
          </hgroup>
          <button
            role='button'
            className='flex px-[2.5rem] py-[0.55rem] justify-center items-center gap-[0.75rem] border-[.2rem] btn-cta'
          >
            <b className='inline-block text-white uppercase font-medium text-[1.25rem] leading-1'>
              shop now
            </b>
            <ArrowCircleWhiteIcon />
          </button>
        </header>
      </hgroup>
    </section>
  );
};

export default Hero;
