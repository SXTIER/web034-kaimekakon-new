import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/1_MainNav.jsx';

const router = createBrowserRouter([
  {
    path: '/web034-kaimekakon-new',
    element: <Nav />,
    children: [
      { path: '/web034-kaimekakon-new', element: <Home /> },
    ],
  },

  {},
  {},
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
