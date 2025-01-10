import React, { useState, useEffect } from 'react';
import productService from '../services/productService';

const ProductForm = ({ selectedProduct, onSave }) => {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({ name: '', price: '', quantity: '' });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      productService.updateProduct(product)
        .then(() => onSave())
        .catch((err) => console.error(err));
    } else {
      productService.addProduct(product)
        .then(() => onSave())
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{product.id ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nombre del producto"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Cantidad"
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;
