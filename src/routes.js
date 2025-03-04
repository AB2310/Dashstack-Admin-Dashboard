import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorites from './pages/Favorites'
import ProductStock from './pages/ProductStock';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import AddContact from "./components/AddContact";
import InvoicePage from './pages/InvoicePage'; 


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} /> 
        <Route path="/stock" element={<ProductStock />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-contact" element={<AddContact />} /> 
        <Route path="/invoice" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
