// import product1 from '../assets/img/perf1.png';
import product1 from '../assets/svg/perf_2.svg';
import product2 from '../assets/svg/perf_1.svg';
import product3 from '../assets/svg/perf3.svg';
import product4 from '../assets/svg/perf4.svg';

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

const Products = () => {
  return (
    <section className='w-[78rem] mx-auto pt-[3.75rem] pb-[8.75rem]'>
      <h3 className='text-color text-xl font-medium leading-1 pb-[3.5rem]'>
        Latest collection
      </h3>
      <div className='flex justify-between'>
        {product_data?.map(({ id, title, details, img }) => (
          <hgroup
            key={id}
            className='w-[17.25rem] flex flex-col items-start gap-[0.75rem]'
          >
            <div className='flex items-center w-full justify-center border bg-accent-3'>
              <img src={img} alt='' className='object-cover' />
            </div>
            <div className='mb-[1.25rem]'>
              <h4 className='text-color text-base font-medium leading-1 mb-[0.56rem]'>
                {title}
              </h4>
              <p className='text-lighter text-sm font-light leading-2'>
                {details}
              </p>
            </div>
            <button
              role='button'
              className='text-color text-base font-medium leading-2 uppercase bg-accent-1 px-[1.25rem] py-[0.62rem] hover:bg-primary hover:text-white'
            >
              Shop now
            </button>
          </hgroup>
        ))}
      </div>
    </section>
  );
};

export default Products;
