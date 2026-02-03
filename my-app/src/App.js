import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import ProductPage from './pages/ProductPage.js';
import SpecificationsPage from './pages/SpecificationsPage.jsx';
import Components from './pages/components.jsx';
import Builds from './pages/Build.js';
import Configurator from './pages/Сonfigurator.js';
import ComponentSelection from './pages/ComponentSelect.jsx';
import Cart from './pages/Cart.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/specifications/:id" element={<SpecificationsPage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/component-selection" element={<ComponentSelection />} />
        <Route path="/select/:componentType" element={<ComponentSelection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;