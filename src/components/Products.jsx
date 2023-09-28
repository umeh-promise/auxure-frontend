// import product1 from '../assets/img/perf1.png';
import product3 from '../assets/icons/perf3.svg';
import product4 from '../assets/icons/perf4.svg';
import product1 from '../assets/icons/perf_1.svg';
import product2 from '../assets/icons/perf_2.svg';

import Wrapper from './bits/Wrapper';

const Products = () => {
  const product_data = [
    {
      id: 1,
      title: 'Enchanted Elixir',
      details:
        'A captivating blend of rare botanicals and sensual musk, Enchanted Elixir unveils a spellbinding fragrance that evokes mystery and allure',
      img: product1,
    },
    {
      id: 2,
      title: 'Opulent Aura',
      details:
        'This luxurious fragrance caresses the senses, leaving an unforgettable trail of elegance and sophistication in its wake with its harmonious fusion of velvety florals',
      img: product2,
    },
    {
      id: 3,
      title: 'Golden Serenade',
      details:
        'Embark on a golden symphony of scents with Golden Serenade. This exquisite fragrance dances with the warmth of golden orchids and rich vanilla',
      img: product3,
    },
    {
      id: 4,
      title: 'Celestial Essence',
      details:
        'Experience the celestial realm with Celestial Essence, a transcendent fragrance that combines ethereal notes of celestial blooms and shimmering amber',
      img: product4,
    },
  ];

  return (
    <Wrapper className='pt-[3.75rem] pb-[4.75rem] lg:pb-[8.75rem]'>
      <h3 className='text-color text-xl font-medium leading-1 pb-[3.5rem]'>
        Latest collection
      </h3>
      {/* <div className='flex justify-between'> */}
      <div className='grid justify-items-center gap-[2rem] grid-cols-1 md:gap-x-[2rem] md:gap-y-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:justify-items-stretch lg:gap-x-[4rem]'>
        {product_data?.map(({ id, title, details, img }) => (
          <hgroup
            key={id}
            className='w-[17.25rem] flex flex-col md:items-start text-center md:text-left items-center gap-[0.75rem]'
          >
            <div className='flex items-center w-full justify-center border-style bg-accent-3'>
              <img src={img} alt='' className='object-cover' />
            </div>
            <div className='lg:mb-[1.25rem]'>
              <h4 className='text-color text-base font-medium leading-1 mb-[0.56rem]'>
                {title}
              </h4>
              <p className='text-lighter text-sm font-lighter leading-2 line-clamp-3 xl:line-clamp-none hover:line-clamp-none'>
                {details}
              </p>
            </div>
            <button
              role='button'
              className='text-color rounded-sm text-base font-medium leading-2 uppercase bg-accent-1 py-[0.45rem] px-[1.25rem] md:py-[0.62rem] hover:bg-primary hover:text-white transition-all duration-700'
            >
              Shop now
            </button>
          </hgroup>
        ))}
      </div>
    </Wrapper>
  );
};

export default Products;
