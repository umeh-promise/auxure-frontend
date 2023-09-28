const Banner = ({ title, text }) => {
  return (
    <header className="w-full h-[6.25rem] md:h-[9.26em] bg-[url('./assets/img/checkout-mobile.png')] lg:bg-[url('./assets/img/checkout-bg.png')] bg-cover bg-bottom md:bg-center lg:bg-cover bg-no-repeat text-lighter flex flex-col items-center justify-center text-center gap-[0.2rem] md:gap-0 rounded-[0.215rem]">
      <h2 className='font-secondary text-md sm:text-[1.5rem] md:text-[2.25rem] font-bold leading-1.5 '>
        {title}
      </h2>
      <p className='text-xbase md:text-base font-light leading-2 md:leading-3 px-4 text-center'>
        {text}
      </p>
    </header>
  );
};

export default Banner;
