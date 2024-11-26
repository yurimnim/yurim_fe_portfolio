import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PortfolioMain from "@/components/pages/PortfolioMain";
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/portfolio" replace />
  },
  {
    path: '/portfolio',
    element: <PortfolioMain />
  }
]);

function App() {

  useEffect(() => {
    console.log('App mounted');
    console.log('Environment:', import.meta.env);
    console.log('Base URL:', import.meta.env.BASE_URL);
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
