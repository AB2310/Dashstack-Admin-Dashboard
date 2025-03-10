import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorites from './pages/Favorites'
import ProductStock from './pages/ProductStock';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import AddContact from "./components/AddContact";
import InvoicePage from './pages/InvoicePage'; 
import UIElements from "./pages/UIElements";
import TeamPage from './pages/TeamPage';
import AddTeam from './components/AddTeam';
import ToDoPage from './pages/ToDoPage';
import OrderListPage from './pages/OrderListPage';
import TablePage from './pages/TablePage';


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
        <Route path="/ui-elements" element={<UIElements />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/add-team" element={<AddTeam />} />
        <Route path="/to-do" element={<ToDoPage />} />
        <Route path="/orders" element={<OrderListPage />} />
        <Route path="/table" element={<TablePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
