import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import ProductPage from './pages/ProductPage.js';
import Components from './pages/components.js';
import Builds from './pages/Build.js';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;