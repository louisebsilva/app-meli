import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductsList } from '../../../client';

const useProductsListService = (querySearch) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async (querySearch) => {
    setLoading(true);
    try {
      getProductsList(querySearch).then((result) => {
        setProductsList(result?.data?.data);
        setLoading(false);
      });
    } catch (error) {
      setProductsList({});
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts(querySearch);
  }, []);

  return {
    productsList,
    loading,
  };
};

useProductsListService.propTypes = {
  querySearch: PropTypes.string,
};

export default useProductsListService;
