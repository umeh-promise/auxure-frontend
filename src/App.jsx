import { ReactComponent as AuxureLogo } from './assets/svg/logo.svg';

function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-background-color'>
      <AuxureLogo className='' />
      {/* <h1 className='font-secondary text-primary-color'> */}
      <h1 className='text-primary-color leading-2 text-xl font-semibold uppercase font-secondary '>
        Discover The Essence Of Timeless Luxury
      </h1>
    </div>
  );
}

export default App;
