import { createBrowserRouter } from 'react-router-dom';
import ProductTable from './pages/ProductTable/ProductTable';
import AddProduct from './pages/AddProduct/AddProduct';
import Detail from './pages/Detail/Detail';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductTable />,
    },
    {
        path: '/add',
        element: <AddProduct />,
    },
    {
        path: '/detail/:id',
        element: <Detail />,
    },
]);
