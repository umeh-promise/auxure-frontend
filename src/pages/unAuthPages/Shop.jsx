import { useMemo, useState } from 'react';

import {
  BtnGridIcon,
  BtnListIcon,
  ChevronDownIcon,
  FIlterSliderIcon,
} from '../../assets/icons/svg-icons';
import img1 from '../../assets/img/perf1.png';
import GridView from '../../components/GridView';
import ListView from '../../components/ListView';
import ShopView from '../../components/ShopView';
import Sidebar from '../../components/Sidebar';
import Banner from '../../components/bits/Banner';
import Button from '../../components/bits/Button';
import Pagination from '../../components/bits/Pagination';
import Select from '../../components/bits/Select';
import Wrapper from '../../components/bits/Wrapper';

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
  {
    id: 5,
    name: 'Celestian Essence',
    price: 140000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.9 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 6,
    name: 'Enchanted Elixir',
    price: 140000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.0 (18)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 7,
    name: 'Opulent Aura',
    price: 110000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.2 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 8,
    name: 'Enchanted Elixir',
    price: 115000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.8 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 9,
    name: 'Enchanted Elixir',
    price: 125000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.8 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 10,
    name: 'Enchanted Elixir',
    price: 125000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.8 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
  {
    id: 11,
    name: 'Celestine Agee',
    price: 125000,
    description:
      'Embark on a golden symphony of scents with Golden Serenade, a fragrance crafted to enchant and enthral the senses. Step into a world where luxury and elegance blend harmoniously.',
    star: '4.8 (12)',
    images: [
      { id: 1, image: img1 },
      { id: 2, image: img1 },
    ],
  },
];

const Shop = () => {
  const [viewType, setViewType] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const pageSize = viewType === 'grid' ? 9 : 4;
  const currentPoductsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  const handleViewChange = (type) => {
    setViewType(type);
    if (viewType !== 'grid') setCurrentPage(1);
  };

  return (
    <Wrapper>
      <section className='w-full pt-[1rem] py-[3.06rem] flex flex-col gap-[3.5rem]  '>
        <Banner
          title='SHOP ALL OUR FRAGRANCES'
          text='Browse our exquisite collection of fragrances'
        />
        <main className='flex w-full flex-col gap-[1.5rem] items-start '>
          {/* Mobile screen */}
          <div className='w-full flex lg:hidden py-[0.75rem] justify-center items-center gap-[2rem] md:gap-[3.75rem] border-[1px] border-gray-4 '>
            <Button className='px-[1rem] flex justify-center items-center gap-[0.25rem] border-none outline-none '>
              <span className='font-xbase font-light leading-3 text-lighter uppercase '>
                Sort by
              </span>
              <ChevronDownIcon />
            </Button>
            <Button
              className='px-[1rem] flex justify-center items-center gap-[0.25rem] border-none outline-none'
              onClick={() => setShowFilter((show) => !show)}
            >
              <span className='font-xbase font-light leading-3 text-lighter uppercase '>
                Filter
              </span>
              <FIlterSliderIcon />
            </Button>
          </div>

          {/* Desktop screen */}
          <div className='w-full py-[1.5rem] flex flex-row justify-between items-center h-[6.125rem]'>
            <hgroup className='w-full flex gap-[3rem] items-center flex-auto '>
              <p className='leading-1.5 md:leading-3 text-xbase md:text-base font-light text-color'>
                <b className='font-semibold'>Showing 1-9</b> of 20 Products
              </p>

              <hgroup className='flex gap-[0.94rem] items-center  '>
                <span className='inline-block text-base font-semibold leading-1 uppercase text-color'>
                  Views:
                </span>
                <BtnGridIcon
                  className='inline-block cursor-pointer'
                  onClick={() => handleViewChange('grid')}
                />
                <BtnListIcon
                  className='inline-block cursor-pointer'
                  onClick={() => handleViewChange('list')}
                />
              </hgroup>
            </hgroup>
            <Select
              label='sortby'
              placeholder='SORT BY'
              disabled
              showLabel={false}
              className='max-w-[8rem] hidden md:flex'
            ></Select>
          </div>

          {/* Views */}
          <ShopView className='w-full flex gap-x-[4rem] items-start  '>
            <Sidebar showFilter={showFilter} />

            <hgroup className='flex flex-[75%] flex-col justify-between items-end gap-[2rem] '>
              {viewType === 'grid' && (
                <GridView products={currentPoductsData} />
              )}

              {viewType === 'list' && (
                <ListView products={currentPoductsData} />
              )}

              <Pagination
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </hgroup>
          </ShopView>
        </main>
      </section>
    </Wrapper>
  );
};

export default Shop;
