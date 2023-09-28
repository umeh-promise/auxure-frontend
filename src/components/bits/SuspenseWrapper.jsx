import React from 'react';

import { RollingLoader } from '../../assets/icons/svg-icons';

const SuspenseWrapper = ({ path }) => {
  const LazyComponent = React.lazy(() =>
    import(/* @vite-ignore */ '../../' + path)
  );

  return (
    <React.Suspense
      fallback={
        <div className='h-screen w-full flex items-center justify-center'>
          <div className='loader-container-inner'>
            <RollingLoader />
          </div>
        </div>
      }
    >
      <LazyComponent />
    </React.Suspense>
  );
};

export default SuspenseWrapper;
