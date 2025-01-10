import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSave = () => {
    setSelectedProduct(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Gestor de Productos</h1>
      <ProductForm selectedProduct={selectedProduct} onSave={handleSave} />
      <ProductList key={refresh} onEditProduct={handleEditProduct} />
    </div>
  );
};

export default App;
