import axios from 'axios';

const BASE_URL = 'https://api.mercadolibre.com';

const getProductList = async (req, resp) => {
  const textSearch = req.query.q;
  const searchURLString = `${BASE_URL}/sites/MLA/search?q=${textSearch}&limit=50`;

  try {
    const result = await axios.get(searchURLString);
    return resp.status(200).send({
      data: result?.data?.results,
    });
  } catch (error) {
    return resp.status(400).send({
      message: error,
    });
  }
};

export const ProductData = {
  getProductList,
};
