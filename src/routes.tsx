import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './pages/layout/app';
import { Home } from './pages/app/home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
