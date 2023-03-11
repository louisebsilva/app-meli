import axios from 'axios';

export const baseUrl = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: baseUrl,
});

export const getProductList = async (textSearch) => {
  return await api.get(`${baseUrl}/items?q=${textSearch}`);
};

export const getOneItem = async (textSearch) => {
  return await api.get(`${baseUrl}/items/${textSearch}`);
};
