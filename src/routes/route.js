import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout';
import Home from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
