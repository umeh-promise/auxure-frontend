import { StarIcon } from '../assets/icons/svg-icons';
import img1 from '../assets/img/img_1.png';
import img2 from '../assets/img/img_2.png';
import img3 from '../assets/img/img_3.png';
import img4 from '../assets/img/img_4.png';

import Wrapper from './bits/Wrapper';

const reviews = [
  {
    id: 1,
    name: 'Martins',
    img: img1,
    createdAt: 'January 12, 2023',
    text: 'It was worth every penny! I recommend it 100%. I look forward to using this more and more. This brand is one that has grown on me, I can’t step out without having the Opulent Aura scent on.',
  },
  {
    id: 2,
    name: 'Owenmen',
    img: img2,
    createdAt: 'January 12, 2023',
    text: 'The perfume is made with all natural ingredients, so you can be sure it is safe and gentle on your skin. My favourite will always be the Enchanted Elixir Unisex Perfume.',
  },
  {
    id: 3,
    name: 'Beatrice',
    img: img3,
    createdAt: 'January 12, 2023',
    text: 'This perfume was recommended to me by a friend and I haven’t stopped using it ever since. I love everything about this perfume, from the packaging to the scent...It is amazing!',
  },
  {
    id: 4,
    name: 'segun',
    img: img4,
    createdAt: 'January 12, 2023',
    text: 'It was worth every penny! I recommend it 100%. I look forward to using this more and more. This brand is one that has grown on me, I can’t step out without having the Opulent Aura scent on.',
  },
  {
    id: 5,
    name: 'Martins',
    img: img1,
    createdAt: 'January 12, 2023',
    text: 'It was worth every penny! I recommend it 100%. I look forward to using this more and more. This brand is one that has grown on me, I can’t step out without having the Opulent Aura scent on.',
  },
  {
    id: 6,
    name: 'Owenmen',
    img: img2,
    createdAt: 'January 12, 2023',
    text: 'The perfume is made with all natural ingredients, so you can be sure it is safe and gentle on your skin. My favourite will always be the Enchanted Elixir Unisex Perfume.',
  },
  {
    id: 7,
    name: 'Beatrice',
    img: img3,
    createdAt: 'January 12, 2023',
    text: 'This perfume was recommended to me by a friend and I haven’t stopped using it ever since. I love everything about this perfume, from the packaging to the scent...It is amazing!',
  },
  {
    id: 8,
    name: 'segun',
    img: img4,
    createdAt: 'January 12, 2023',
    text: 'It was worth every penny! I recommend it 100%. I look forward to using this more and more. This brand is one that has grown on me, I can’t step out without having the Opulent Aura scent on.',
  },
];

function ReviewCard({ showMore }) {
  const reviewsItem = !showMore ? reviews.slice(0, 4) : reviews;

  return (
    <Wrapper
      fluid
      className='grid gap-x-[5rem] gap-y-[1rem] lg:grid-cols-2 my-[2rem]'
    >
      {reviewsItem?.map(({ id, img, text, name, createdAt }) => (
        <Wrapper
          fluid
          key={id}
          className=' flex flex-col items-start gap-[1.13rem] my-[1rem] py-[1rem] border-b-[1px]  border-gray '
        >
          <div className='flex items-center  w-full gap-[2rem] md:justify-between'>
            <div className='flex items-center gap-[1rem] '>
              <img src={img} alt={name} className='block' />

              <hgroup className='flex flex-col'>
                <h4 className='text-color text-[1.25rem] font-semibold leading-1.5 capitalize '>
                  {name}
                </h4>

                <span className='flex gap-[0.2rem] '>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
              </hgroup>
            </div>
            <time className='text-lighter-1 text-sm md:text-base font-light leading-1.5 md:leading-[1.75rem] '>
              {createdAt}
            </time>
          </div>
          <div className='mt-[0.2rem] text-xbase md:text-base font-light leading-[1.5rem] text-lighter '>
            <p>{text}</p>
          </div>
        </Wrapper>
      ))}
    </Wrapper>
  );
}

export default ReviewCard;
