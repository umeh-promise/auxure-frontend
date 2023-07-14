import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex items-center justify-center flex-col h-screen font-medium text-lg leading-1 text-center gap-2'>
      <h1 className='underline'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Page <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
