import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {
  return (
    <>
    <ToastContainer position='bottom-right' />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<ProductList />} />
        <Route path="category/:categoryName" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* Fallback */}
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path='/register' element={<Register/>}  />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
