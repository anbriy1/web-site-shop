import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import ProductPage from './pages/ProductPage.js';
import Components from './pages/components.jsx';
import Builds from './pages/Build.js';
import Configurator from './pages/Сonfigurator.js';
import ComponentSelection from './pages/ComponentSelect.jsx';
import ComponentSelect from './pages/ComponentSelect.jsx'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/component-selection" element={<ComponentSelection />} />
        {/* Новый роут для выбора конкретного типа компонента */}
        <Route path="/select/:componentType" element={<ComponentSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;