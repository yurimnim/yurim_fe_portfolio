import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PortfolioMain from "@/components/pages/PortfolioMain";

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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
