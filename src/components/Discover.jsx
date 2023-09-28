import { ArrowCircleIcon } from '../assets/icons/svg-icons';
import dImg_1 from '../assets/img/img1.png';
import dImg_2 from '../assets/img/img2.png';

import Wrapper from './bits/Wrapper';

const Discover = () => {
  const discover_data = [
    {
      id: 1,
      img: dImg_1,
      title: 'Timeless Elegance',
      details:
        'Immerse yourself in the essence of timeless elegance. Our exquisite fragrances are meticulously crafted to embody sophistication and grace. Experience the allure of our luxurious scents, meticulously curated to captivate and leave an indelible impression',
    },
    {
      id: 2,
      img: dImg_2,
      title: 'Unleash Your Inner Glamour',
      details:
        'Unleash your inner glamour with our extraordinary collection of perfumes. Indulge in the opulence and sophistication of our scents, designed to accentuate your unique style and elevate every moment. Discover the essence of true luxury and embrace your own unparalleled allure.',
    },
  ];

  return (
    <Wrapper fluid id='about'>
      <div className='flex h-full gap-[2rem] md:gap-0 flex-col mb-4 md:mb-0'>
        {discover_data?.map(({ id, img, title, details }) => (
          <article
            className={`w-[90vw] mx-auto sm:w-[80vw] md:w-full flex-col md:flex-row even:md:flex-row-reverse gap-4 md:gap-0 h-fit flex `}
            key={id}
          >
            <div className='w-full '>
              <img
                src={img}
                alt={title}
                className='block h-full w-full object-cover object-top'
                loading='lazy'
              />
            </div>
            <div className='w-full bg-[url("./assets/icons/auxure-diagonal.svg")] bg-cover bg-no-repeat flex md:justify-center items-center'>
              <hgroup className='w-[21rem] lg:w-[27rem]'>
                <h4 className='text-md lg:text-lg text-color font-medium leading-0.5 mb-[0.75rem]'>
                  {title}
                </h4>
                <p className='font-lighter text-color lg:text-lighter text-sm lg:text-base lg:font-light leading-1.5 md:leading-2 lg:leading-3 mb-[0.94rem] md:mb-[1rem] lg:mb-[1.5rem] md:line-clamp-none line-clamp-4 hover:line-clamp-none'>
                  {details}
                </p>
                <button
                  role='button'
                  className='flex px-[0.6rem] py-[0.2rem] md:px-[0.8rem] lg:px-[0.6rem] md:py-[0.3rem] lg:py-[0.45rem] justify-center items-center gap-[0.5rem] lg:gap-[0.75rem] border-[.125rem] border-color'
                >
                  <b className='inline-block uppercase font-medium text-sm sm:text-base lg:text-[1.25rem] leading-1'>
                    Discover Now
                  </b>
                  <ArrowCircleIcon className='p-1 md:p-0' />
                </button>
              </hgroup>
            </div>
          </article>
        ))}
      </div>
    </Wrapper>
  );
};

export default Discover;
