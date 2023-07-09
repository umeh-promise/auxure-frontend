import { Link } from 'react-router-dom';

import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import slider3 from '../../assets/img/slider3.png';
import { CheckIcon, GoogleIcon } from '../../assets/svg/svg-icons';
import Carousel from '../../components/bits/Carousel';

const Login = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
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
      <div className='w-full flex-[50%] gap-[3rem] self-center flex flex-col leading-1 font-medium items-center px-[2rem] text-center text-lighter  '>
        <hgroup className='flex flex-col gap-[0.62rem] w-full  md:w-[28rem] '>
          <h2 className='text-xl leading-1 font-medium'>
            Log in to your account
          </h2>
          <p className='text-base font-light leading-3'>
            To stay connected, kindly log in to your account.
          </p>
        </hgroup>

        <form className='w-full md:w-[28rem] flex items-center flex-col gap-[1.25rem]'>
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

          <div className='w-full flex justify-between items-center'>
            <hgroup className='flex relative gap-[0.65rem] items-center justify-center'>
              <input
                type='checkbox'
                id='remember-me'
                className='w-[1.5rem] h-[1.5rem] bg-primary appearance-none rounded-[0.313rem] shrink-0 checked:bg-primary checked:border-0 focus:outline-none peer cursor-pointer'
              />
              <label
                htmlFor='remember-me'
                className='text-lighter text-base font-light leading-3 cursor-pointer'
              >
                Remember Me
              </label>
              <CheckIcon className='hidden w-[1.5rem] h-[1.5rem] peer-checked:block absolute w-[1.5rem] pointer-events-none left-0' />
            </hgroup>

            <Link
              to='/forgot-password'
              className='text-lighter text-base font-light leading-3'
            >
              Forgot password?
            </Link>
          </div>

          <button
            role='button'
            className='self-stretch flex py-[0.975rem] px-[1.25rem] justify-center items-center rounded-[0.625rem] bg-primary border-secondary border-solid outline-0 border-[1px] text-white uppercase font-semibold leading-1 text-base'
          >
            log in
          </button>
          <span className='text-base font-semibold leading-1 uppercase'>
            or
          </span>
          <Link
            to='#'
            className='flex py-[0.675rem] px-[1.25rem] justify-center items-center gap-[0.625rem] self-stretch bg-white border-[1px] border-solid border-secondary rounded-[0.625rem] uppercase font-semibold leading-1 text-base text-color'
          >
            <GoogleIcon />
            Sign in with google
          </Link>
          <span className='text-color font-light leading-3 text-base'>
            Don’t have an account?{' '}
            <Link to='signup' className='text-primary '>
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
