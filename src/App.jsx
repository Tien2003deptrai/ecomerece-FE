// import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './router';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header/Header';
// import Carousel from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Carousel />
//       <RouterProvider router={router} />
//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import ProductForm from './test/ProductForm';
import ProductList from './test/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>E-commerce Product Management</h1>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
