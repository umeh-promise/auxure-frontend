import { CartIcon, FavouriteIcon, StarIcon } from '../assets/icons/svg-icons';
import img1 from '../assets/img/perf1.png';
import { formatAmount } from '../helpers/formatAmount';

import Button from './bits/Button';
import Wrapper from './bits/Wrapper';

const products = [
  {
    id: 1,
    name: 'Enchanted Elixir',
    price: 125000,
    description:
      'A captivating blend of rare botanicals and sensual allure, this enchanting fragrance transports you to a realm of elegance and mystery.',
    star: '4.8 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 2,
    name: 'Opulent Aura',
    price: 120000,
    description:
      'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.',
    star: '4.6 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 3,
    name: 'Golden Somander',
    price: 135000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.7 (14)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 4,
    name: 'Celestial Essence',
    price: 130000,
    description:
      'Experience the celestial realm with "Celestial Essence," a transcendent fragrance that transports you to a world of ethereal beauty and divine wonder. ',
    star: '4.1 (18)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  // {
  //   id: 5,
  //   name: 'Celestian Essence',
  //   price: 140000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.9 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: 'Enchanted Elixir',
  //   price: 140000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.0 (18)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: 'Opulent Aura',
  //   price: 110000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.2 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 8,
  //   name: 'Enchanted Elixir',
  //   price: 115000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.8 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 9,
  //   name: 'Enchanted Elixir',
  //   price: 125000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.8 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: 'Enchanted Elixir',
  //   price: 125000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.8 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
  // {
  //   id: 11,
  //   name: 'Celestine Agee',
  //   price: 125000,
  //   description:
  //     'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
  //   star: '4.8 (12)',
  //   images: [
  //     { id: 1, image: img1 },
  //     { id: 2, image: img1 },
  //   ],
  // },
];

function SimilarProducts() {
  return (
    <Wrapper fluid className='my-[2rem]'>
      <h4 className='my-[2rem] text-color text-md md:text-lg font-semibold leading-1.5 uppercase '>
        SIMILAR PRODUCTS YOU MIGHT LIKE
      </h4>
      <ul className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[3rem] gap-y-[3rem] '>
        {products?.map(({ id, images, name, price, star }) => (
          <li
            key={id}
            to={`${id}`}
            className='w-full flex flex-col justify-between items-center gap-[0.75rem] border-[1px] border-gray-4 bg-white rounded-t-md '
          >
            <div className='w-full flex flex-col justify-end py-[.2rem] items-center bg-accent-3 gap-[0.0625rem] h-[12rem] '>
              <img
                src={images[0].image}
                alt={name}
                className='block object-cover'
              />
            </div>
            <div className='w-full flex flex-col gap-y-[1rem] pt-[0.5rem] pb-[0.75rem] px-[0.75rem] '>
              <hgroup className='w-full flex justify-between items-center '>
                <h4 className='text-color-1 text-base font-medium leading-1'>
                  {name}
                </h4>
                <p className='flex text-color text-xbase font-light leading-3 items-center gap-[0.12rem] '>
                  <StarIcon />
                  <span>{star}</span>
                </p>
              </hgroup>
              <hgroup className='w-full flex justify-between items-center '>
                <h3 className='text-color text-md font-semibold leading-2 '>
                  N{formatAmount(price)}
                </h3>
                <Button className='border-none'>
                  <FavouriteIcon />
                </Button>
              </hgroup>
              <Button className='w-full flex py-[0.66rem] items-center justify-center gap-[0.75rem] rounded-[0.25rem] bg-accent-1 border-accent-1 '>
                <CartIcon />
                <span className='text-color font-semibold leading-1 uppercase text-base'>
                  add to cart
                </span>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default SimilarProducts;
