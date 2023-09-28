import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className='flex items-center justify-center flex-col h-screen font-medium text-lg leading-1 text-center gap-4'>
      <h1 className='text-md md:text-xl mb-4'>Oops 😢</h1>
      <p className='text-base md:text-lg'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='text-base md:text-lg'>
        Page {error.statusText || error.message}
      </p>
      <button
        className='text-sm md:text-md text-blue-500 hover:text-blue-600 hover:underline '
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
};

export default ErrorPage;
