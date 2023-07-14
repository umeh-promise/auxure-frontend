import { ArrowCircleWhiteIcon } from '../assets/svg/svg-icons';

import Navbar from './Navbar';

const Hero = () => {
  return (
    <section
      className="w-full md:h-[40rem] lg:h-[65rem] h-[24.75rem] bg-[url('./assets/img/auxure-bg.png')] bg-cover bg-center md:bg-cover bg-no-repeat"
      role='banner'
    >
      <hgroup className='w-[90vw] md:w-[80vw] lg:w-[78vw] mx-auto flex flex-col gap-[2.5rem] md:gap-[5rem] items-start'>
        <Navbar />
        <header className='text-white uppercase'>
          <hgroup className='w-[18rem] md:w-[25rem] lg:w-[32rem] inline-block mb-[2.32rem] md:mb-[2rem] font-secondary'>
            {'Discover The Essence Of Timeless'
              .split(' ')
              .map((word, index) => (
                <span
                  key={index}
                  className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  md:leading-1.5 leading-1'
                  role='heading'
                >
                  <span className='text-xl sm:text-[2.3rem] md:text-[3rem] lg:text-[4rem]'>
                    {word.charAt(0)}
                  </span>
                  <span className=''>{word.slice(1)} </span>
                </span>
              ))}
            <span
              className='relative text-md md:text-xl lg:text-2xl font-black leading-1 inline-block border-y-[.125rem] border-color-primary heading-svg-container px-[0.62rem] pt-[0.75rem] pb-[0.375rem]'
              role='heading'
            >
              Luxury
            </span>
          </hgroup>
          <button
            role='button'
            className='flex px-[.5rem] lg:px-[2.5rem] lg:py-[0.55rem] justify-center items-center gap-[0.65rem] lg:gap-[0.75rem] border-[.18rem] lg:border-[.2rem] btn-cta'
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
