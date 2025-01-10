import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products'; 

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

const updateProduct = async (product) => {
  const response = await axios.put(`${API_URL}/${product.id}`, product);
  return response.data;
};

const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
