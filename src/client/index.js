import axios from 'axios';

export const baseUrl = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: baseUrl,
});

export const getProductsList = async (textSearch) => {
  return await api.get(`${baseUrl}/items?q=${textSearch}`);
};

export const getItemByID = async (itemID) => {
  return await api.get(`${baseUrl}/items/${itemID}`);
};

export const getItemDescription = async (itemID) => {
  return await api.get(`${baseUrl}/items/${itemID}/description`);
};
