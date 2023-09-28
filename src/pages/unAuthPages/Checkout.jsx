import OrderSummary from '../../components/OrderSummary';
import Banner from '../../components/bits/Banner';
import Button from '../../components/bits/Button';
import Input from '../../components/bits/Input';
import Select from '../../components/bits/Select';
import Wrapper from '../../components/bits/Wrapper';

const Checkout = () => {
  return (
    <Wrapper>
      <section className='pt-[1rem] py-[3.06rem] flex flex-col gap-[3.5rem] '>
        <Banner
          title='CHECK OUT'
          text='Secure and Convenient Payment Process'
        />
        <main className='flex w-full flex-col lg:flex-row-reverse gap-[3.75rem] items-start '>
          {/* Order Summary */}
          <OrderSummary />

          {/* Personal details */}
          <form className='w-full flex-[100%] lg:flex-[65%] bg-white px-[1rem] md:px-[2rem] py-[1.5rem] md:py-[3rem] flex flex-col items-start gap-[3rem] rounded-[0.625rem] '>
            <hgroup className='w-full flex flex-col gap-[2rem] md:gap-[2.5rem]'>
              <h3 className='text-lg md:text-xl font-medium leading-1 text-lighter'>
                Personal Details
              </h3>
              <div className='w-full flex flex-col md:flex-row gap-[2rem] md:gap-[1.25rem]'>
                <Input
                  type='text'
                  label='First Name'
                  placeholder='John'
                  required
                />
                <Input
                  type='text'
                  label='Last Name'
                  placeholder='Doe'
                  required
                />
              </div>
              <div className='w-full flex flex-col md:flex-row gap-[2rem] md:gap-[1.25rem]'>
                <Input
                  type='email'
                  label='Email Address'
                  placeholder='abc@gmail.com'
                  required
                />
                <Input
                  type='text'
                  label='Phone Number'
                  placeholder='+234'
                  required
                />
              </div>
            </hgroup>

            <hgroup className='w-full flex flex-col gap-[2rem] md:gap-[2.5rem]'>
              <h3 className='text-lg md:text-xl font-medium leading-1 text-lighter'>
                Shipping Details
              </h3>
              <div className='w-full flex flex-col md:flex-row gap-[2rem] md:gap-[1.25rem]'>
                <Input
                  type='text'
                  label='Address'
                  placeholder='Enter address'
                  required
                />
                <Input
                  type='text'
                  label='Zip Code'
                  placeholder='Enter zip code'
                  required
                />
              </div>
              <div className='w-full flex flex-col md:flex-row gap-[2rem] md:gap-[1.25rem]'>
                <Input
                  type='text'
                  label='City'
                  placeholder='Enter city'
                  required
                />
                <Select label='Country' placeholder='Select country' required>
                  <option value='nigeria'>Nigeria</option>
                  <option value='russia'>Russia</option>
                  <option value='usa'>USA</option>
                  <option value='australia'>Australia</option>
                </Select>
              </div>
            </hgroup>

            <hgroup className='w-full flex flex-col gap-[2rem] md:gap-[2.5rem]'>
              <h3 className='text-lg md:text-xl font-medium leading-1 text-lighter'>
                Payment
              </h3>
              <div className='w-full flex flex-col justify-center gap-[1rem]'>
                <h4 className='text-base text-color font-medium leading-1'>
                  Pay With:
                </h4>
                <hgroup className='w-fit flex gap-[.5rem] md:gap-[1rem] lg:gap-[1.19rem] items-start justify-start'>
                  <Input
                    variant='primary'
                    type='radio'
                    name='paymentMode'
                    label='Card'
                    defaultChecked
                  />
                  <Input
                    type='radio'
                    name='paymentMode'
                    label='Bank'
                    variant='primary'
                  />
                  <Input
                    type='radio'
                    name='paymentMode'
                    label='Transfer'
                    variant='primary'
                  />
                </hgroup>
              </div>

              <div className='w-full flex flex-col justify-center gap-[1.88rem]'>
                <Input
                  type='text'
                  label='Card Number'
                  placeholder='1234 5678 9101 1121'
                  required
                />
                <hgroup className='flex flex-col md:flex-row gap-[1.6rem]'>
                  <Input
                    type='text'
                    label='Expiration Date'
                    placeholder='MM/YY'
                    required
                  />
                  <Input type='text' label='CVV' placeholder='123' required />
                </hgroup>
                <div className='w-full flex justify-between items-center'>
                  <hgroup className='w-full flex gap-[1rem] items-center justify-center'>
                    <Input
                      type='checkbox'
                      label='Save card details'
                      variant='secondary'
                    />
                  </hgroup>
                </div>
              </div>
            </hgroup>

            <Button className='w-full md:w-fit uppercase bg-accent-1 border-primary outline-none py-[1rem] px-[4rem] text-color-1 text-base font-semibold leading-1 '>
              Pay N254,875
            </Button>
          </form>
        </main>
      </section>
    </Wrapper>
  );
};

export default Checkout;
