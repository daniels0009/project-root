import React, { useEffect, useState } from 'react';
import productService from '../services/productService';

const ProductList = ({ onEditProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    productService.deleteProduct(id)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => onEditProduct(product)}>Editar</button>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
