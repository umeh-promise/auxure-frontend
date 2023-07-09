import { useCallback, useEffect, useState } from 'react';

const Carousel = ({ children, showControls = true, showIndicators = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  }, [children.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  }, [children.length]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className='w-full flex flex-col gap-[1.5rem]'>
      <div
        className={`w-full flex flex-col relative bg-primary`}
        onKeyDown={handleKeyDown}
        tabIndex='0'
        aria-live='polite'
        aria-roledescription='carousel'
      >
        <hgroup className='w-full h-screen overflow-hidden'>
          <div
            className={`flex [&>*]:shrink-0 [&>*]:w-full [&>*]:h-screen `}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform .6s linear',
            }}
          >
            {children}
          </div>
        </hgroup>

        {showControls && (
          <>
            <button
              className='absolute bg-primary text-white boder-0 text-[1.5rem] px-[1rem] py-[0.5rem] cursor-pointer top-[50%] translate-y-[-50%] left-0'
              onClick={handlePrev}
              aria-label='Previous slide'
            >
              Previous
            </button>
            <button
              className='absolute bg-primary text-white boder-0 text-[1.5rem] px-[1rem] py-[0.5rem] cursor-pointer top-[50%] translate-y-[-50%] right-0'
              onClick={handleNext}
              aria-label='Next slide'
            >
              Next
            </button>
          </>
        )}

        {showIndicators && (
          <hgroup className='absolute bottom-[2.5rem] left-[50%] translate-x-[-50%] flex gap-[0.5rem] p-[1rem]'>
            {children.map((_, index) => (
              <button
                key={index}
                className={`w-[1rem] h-[1rem] bg-accent-2 border-0 rounded-full cursor-pointer outline-0 ${
                  index === activeIndex ? 'bg-secondary' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === activeIndex}
              ></button>
            ))}
          </hgroup>
        )}
      </div>
    </section>
  );
};

export default Carousel;
