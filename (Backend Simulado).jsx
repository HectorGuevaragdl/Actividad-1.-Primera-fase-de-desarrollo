// services/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // API fake para prueba

export const getCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCustomer = async (customer) => {
  const response = await axios.post(API_URL, customer);
  return response.data;
};