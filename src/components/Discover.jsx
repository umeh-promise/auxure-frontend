import { ArrowCircleIcon } from '../assets/svg/svg-icons';

const Discover = () => {
  const discover_data = [
    {
      id: 1,
      reverse: 'flex-row',
      bg_img: 'bg-timeless-image',
      title: 'Timeless Elegance',
      details:
        'Immerse yourself in the essence of timeless elegance. Our exquisite fragrances are meticulously crafted to embody sophistication and grace. Experience the allure of our luxurious scents, meticulously curated to captivate and leave an indelible impression',
    },
    {
      id: 2,
      reverse: 'flex-row-reverse',
      bg_img: 'bg-glamour-image',
      title: 'Unleash Your Inner Glamour',
      details:
        'Unleash your inner glamour with our extraordinary collection of perfumes. Indulge in the opulence and sophistication of our scents, designed to accentuate your unique style and elevate every moment. Discover the essence of true luxury and embrace your own unparalleled allure.',
    },
  ];

  return (
    <section id='about'>
      {discover_data?.map(({ id, bg_img, title, details, reverse }) => (
        <article className={`w-full h-[37.5rem] flex ${reverse}`} key={id}>
          <span
            className={`w-full ${bg_img} bg-no-repeat bg-cover bg-bottom`}
          ></span>
          <div className='w-full bg-auxure-diagonal bg-cover bg-no-repeat flex items-center'>
            <hgroup className='pl-[7.5rem] pr-[14rem]'>
              <h4 className='text-lg text-color font-medium leading-0.5 mb-[0.75rem]'>
                {title}
              </h4>
              <p className='text-lighter leading-3 mb-[1.5rem]'>{details}</p>
              <button
                role='button'
                className='flex px-[1.2rem] py-[0.45rem] justify-center items-center gap-[0.75rem] border-[.125rem] border-[1px] border-[#312921]'
              >
                <b className='inline-block uppercase font-medium text-[1.25rem] leading-1'>
                  Discover Now
                </b>
                <ArrowCircleIcon />
              </button>
            </hgroup>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Discover;
