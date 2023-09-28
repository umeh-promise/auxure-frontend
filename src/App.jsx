import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import SuspenseWrapper from './components/bits/SuspenseWrapper';
import Layout from './components/Layout';
import Product from './pages/unAuthPages/Product';
import Checkout from './pages/unAuthPages/Checkout';
import ErrorPage from './pages/unAuthPages/ErrorPage';
import Home from './pages/unAuthPages/Home';
import Login from './pages/unAuthPages/Login';
import Shop from './pages/unAuthPages/Shop';
import Signup from './pages/unAuthPages/Signup';
import {
  cart,
  checkout,
  home,
  login,
  product,
  shop,
  signup,
} from './utils/routes';
import Cart from './pages/unAuthPages/Cart';

// export const router = createBrowserRouter([
//   {
//     path: home,
//     element: <SuspenseWrapper path='./pages/unAuthPages/Home' />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: login,
//     element: <SuspenseWrapper path='./pages/unAuthPages/Login' />,
//   },
//   {
//     path: shop,
//     element: <SuspenseWrapper path='./pages/unAuthPages/Shop' />,
//   },
// ]);

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
    element: <Layout />,
    children: [
      {
        path: shop,
        element: <Shop />,
      },
      {
        path: product,
        element: <Product />,
      },
      {
        path: checkout,
        element: <Checkout />,
      },
      {
        path: cart,
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
