import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/unAuthPages/Home';
import ErrorPage from './pages/unAuthPages/NotFound';
import { home } from './utils/routes';

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
