import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<ProductList />} />
        <Route path="category/:categoryName" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
