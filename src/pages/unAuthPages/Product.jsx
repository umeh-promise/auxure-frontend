import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  CartIcon,
  FavouriteIcon,
  StarFilledIcon,
} from '../../assets/icons/svg-icons';
import img2 from '../../assets/img/perf21.png';
import img1 from '../../assets/img/perf22.png';
import ProductAccordian from '../../components/ProductAccordian';
import Reviews from '../../components/Reviews';
import Banner from '../../components/bits/Banner';
import Button from '../../components/bits/Button';
import Input from '../../components/bits/Input';
import Wrapper from '../../components/bits/Wrapper';
import { cart } from '../../utils/routes';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const className = useMemo(
    () => ({
      inputClass:
        'w-[1.46rem] h-[1.46rem] border-primary border-[2px] before:bg-primary checked:border-primary checked:before:translate-y-[38%] checked:before:translate-x-[40%] before:w-[0.75rem] before:h-[0.75rem]  [&+label]:text-color-1 [&+label]:checked:text-color',
      labelClass: '',
    }),
    []
  );

  return (
    <Wrapper>
      <section className='w-full pt-[1rem] py-[3.06rem] flex flex-col gap-[3.5rem]   '>
        <Banner
          title='SHOP ALL OUR FRAGRANCES'
          text='Don’t miss out on our exclusive fragrances. Add to cart now!'
        />
        <main className='flex w-full flex-col gap-[1.5rem] items-start '>
          <div className='grid lg:grid-cols-2 gap-x-[2.2rem] gap-y-[3rem] md:grid-y-0 md:gap-x-[4rem] items-center '>
            <div className='flex items-center justify-center lg:justify-start md:gap-[2.63rem] px-[2.125rem] bg-accent-3 shadow-sm h-[28rem] '>
              <hgroup className='flex flex-col gap-[0.5rem]'>
                {[img2, img2, img2]?.map((img, index) => (
                  <span
                    key={index}
                    className=' flex items-center justify-center border-[1.5px] border-gray w-[3.31rem] h-[2.69rem] py-2 md:w-[5.31rem] md:h-[4.69rem] shrink-0'
                  >
                    <img
                      src={img}
                      alt='product-image'
                      className='w-full h-full block object-contain '
                    />
                  </span>
                ))}
              </hgroup>
              <img
                src={img1}
                alt='product-image'
                className='w-full h-full object-contain block'
              />
            </div>
            <div className='flex flex-col gap-[1.6rem] lg:gap-[0.87rem] xl:gap-[2.32rem] w-full'>
              <hgroup className='flex flex-col gap-[0.56rem]'>
                <h4 className='text-xl font-medium leading-1 text-color mb-[1rem]'>
                  N110.00
                </h4>
                <span className='flex flex-col sm:flex-row gap-x-[1.25rem] gap-y-[1rem] mb-4 '>
                  {['100 ML/3.38 FL. OZ', '50 ML/1.69 OZ']?.map((item) => (
                    <div key={item}>
                      <Input
                        type='radio'
                        label={item}
                        name='product-size'
                        variant='primary'
                        childrenClass={className}
                        defaultChecked={item.at(0)}
                        className=''
                      />
                    </div>
                  ))}
                </span>
                <div className='flex items-start lg:items-center gap-[0.5rem] flex-col md:flex-row'>
                  <span className='flex items-center gap-[0.2rem] '>
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarFilledIcon key={i} />
                    ))}
                  </span>
                  <hgroup className='flex items-center justify-center gap-[0.5rem]'>
                    <span className='font-base leading-3 font-light text-color'>
                      4.7 Ratings
                    </span>
                    <span className='w-[0.32rem] h-[0.32rem] shrink-0 bg-primary block rounded-full ' />

                    <span className='font-base leading-3 font-light text-color'>
                      11K+ Reviews
                    </span>
                  </hgroup>
                </div>
              </hgroup>
              <hgroup className='my-[.46rem]'>
                <h4 className='text-color text-lg font-semibold leading-1.5 mb-[0.62rem] '>
                  Enchanted Elixir Unisex Perfume
                </h4>

                <p className='text-base font-light leading-3 text-lighter'>
                  An exquisite blend of precious ingredients that leaves you
                  feeling like a million bucks. The top notes of this perfume
                  are a delicate blend of bergamot and grapefruit, which give it
                  a fresh and citrusy aroma.
                </p>
              </hgroup>

              <div className='flex gap-2 w-full flex-col md:flex-row'>
                <Button
                  className='px-[1.25rem] py-[0.625rem] flex items-center gap-[1rem] shrink-0 bg-accent-1 border-none rounded-none '
                  onClick={() => navigate(cart)}
                >
                  <CartIcon />
                  <span className='font-base font-semibold leading-1 uppercase text-color'>
                    Add to cart
                  </span>
                </Button>
                <Button className='px-[1.25rem] py-[0.625rem] flex items-center gap-[1rem] shrink-0 border-[1px] border-accent-1 rounded-none '>
                  <FavouriteIcon />
                  <span className='font-base font-semibold leading-1 uppercase text-color'>
                    wishlist
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <ProductAccordian title='SCENT DESCRIPTION'>
            <p>
              Characterized by fresh and citrusy, the heart notes are floral and
              sweet, and the base notes are woody and musky. Sure to turn heads
              and give you dozens of complements wherever you go. An exquisite
              blend of precious ingredients that leaves you feeling like a
              million bucks. The top notes of this perfume are a delicate blend
              of bergamot and grapefruit, which give it a fresh and citrusy
              aroma.
            </p>
          </ProductAccordian>
          <ProductAccordian title='COMPOSITION AND CARE'>
            <p>
              This perfume is a fresh and floral fragrance with a hint of
              citrus. The top notes of bergamot, lemon, and mandarin orange are
              invigorating and uplifting. The heart notes of jasmine, rose, and
              lily of the valley are feminine and romantic. The base notes of
              sandalwood, amber, and musk are warm and sensual.
            </p>
          </ProductAccordian>
          <ProductAccordian title='SHIPPING AND DELIVERY'>
            <ul className='mb-[0.82rem]'>
              Shipping within Nigeria:
              <li className='list-disc ml-10'>
                Free shipping for orders over ₦100,000.
              </li>
              <li className='list-disc ml-10'>
                Shipping costs for orders under ₦30,000 vary by location, but
                are between ₦1,000 and ₦3,000.
              </li>
              <li className='list-disc ml-10'>
                Shipping within Nigeria ranges from 24 to 72 hours.
              </li>
            </ul>
            <ul className='mb-[0.82rem]'>
              Shipping outside Nigeria:
              <li className='list-disc ml-10'>
                Shipping costs vary by destination, but are typically between
                ₦5,000 and ₦10,000.
              </li>
              <li className='list-disc ml-10'>
                Shipping times outside Nigeria typically range from 7 to 14
                days.
              </li>
              <li className='list-disc ml-10'>
                Delivery. Orders are delivered to the customer’s home or office
                address.
              </li>
            </ul>
          </ProductAccordian>

          <Reviews />
        </main>
      </section>
    </Wrapper>
  );
}

export default Product;
