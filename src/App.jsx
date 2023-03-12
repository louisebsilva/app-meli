import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ProductsList from './pages/ProductsList/ProductsList';
import Product from './pages/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ProductsList />} />
        <Route path="/items/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
