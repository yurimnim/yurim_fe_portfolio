import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PortfolioMain from "@/components/pages/PortfolioMain";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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
