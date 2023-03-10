import axios from 'axios';

export const baseUrl = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: baseUrl,
});

export const getItems = async (textSearch) => {
  return api.get(`${baseUrl}/items?q=${textSearch}`);
};
