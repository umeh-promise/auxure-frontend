import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/unAuthPages/ErrorPage';
import Home from './pages/unAuthPages/Home';
import Login from './pages/unAuthPages/Login';
import Shop from './pages/unAuthPages/Shop';
import Signup from './pages/unAuthPages/Signup';
import { home, login, shop, signup } from './utils/routes';

const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: login,
    element: <Login />,
  },
  {
    path: signup,
    element: <Signup />,
  },
  {
    path: shop,
    element: <Shop />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
