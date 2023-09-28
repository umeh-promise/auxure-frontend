import { Link, useNavigate } from 'react-router-dom';

import { GoogleIcon, LogoIcon } from '../../assets/icons/svg-icons';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import slider3 from '../../assets/img/slider3.png';
import Carousel from '../../components/bits/Carousel';
import Wrapper from '../../components/bits/Wrapper';
import { home, login } from '../../utils/routes';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Wrapper fluid className='flex h-screen '>
      <div className='flex-[50%] hidden md:block '>
        <Carousel showControls={false} showIndicators={true}>
          {[slider1, slider2, slider3].map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`auxure slider img ${index + 1}`}
                className='w-full h-full block object-cover object-top'
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='w-full flex-[50%] min-h-fit gap-[2rem] md:gap-[1.5rem] self-center flex flex-col leading-1 font-medium items-center px-[2rem] text-center text-lighter mt-[4rem] md:mt-0 '>
        <LogoIcon className='cursor-pointer' onClick={() => navigate(home)} />
        <hgroup className='flex flex-col gap-[0.62rem] w-full md:w-[28rem] '>
          <h2 className='text-xl leading-1 font-medium'>Create an account</h2>
          <p className='text-base font-light leading-3'>
            Get started with an account on Auxure
          </p>
        </hgroup>

        <form className='w-full md:w-[28rem] flex items-center flex-col gap-[1.25rem]'>
          <Link
            to='#'
            className='flex py-[0.675rem] px-[1.25rem] justify-center items-center gap-[0.625rem] self-stretch bg-white border-[1px] border-solid border-secondary rounded-[0.625rem] uppercase font-semibold leading-1 text-base text-color'
          >
            <GoogleIcon />
            Sign in with google
          </Link>
          <span className='text-base font-semibold leading-1 uppercase'>
            or
          </span>
          <input
            type='text'
            placeholder='Email address'
            className='py-[0.575rem] px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3 '
          />

          <input
            type='password'
            placeholder='Password'
            className='py-[0.575rem] px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3 '
          />

          <div className='w-full flex gap-[0.5rem] flex-col flex-start '>
            <input
              type='password'
              placeholder='Confirm password'
              className='py-[0.575rem] w-full px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3 '
            />
            <p className='text-[0.875rem] self-start font-light leading-3 text-color'>
              8 or more characters
            </p>
          </div>

          <span className='w-full self-start text-color font-light leading-3 text-base'>
            By signing up you agree with our{' '}
            <Link to='terms&condition' className='text-primary '>
              Terms and Conditions
            </Link>
          </span>

          <button
            role='button'
            className='self-stretch flex py-[0.975rem] px-[1.25rem] justify-center items-center rounded-[0.625rem] bg-primary border-secondary border-solid outline-0 border-[1px] text-white uppercase font-semibold leading-1 text-base'
          >
            log in
          </button>

          <span className='text-color font-light leading-3 text-base'>
            Already have an account?{' '}
            <Link to={login} className='text-primary '>
              Login
            </Link>
          </span>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;
