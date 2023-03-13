import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductsList } from '../../../client';

const useProductsService = (querySearch) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async (querySearch) => {
    setLoading(true);
    try {
      getProductsList(querySearch).then((result) => {
        setProductsList(result?.data?.data);
      });
      setLoading(false);
    } catch (error) {
      setProductsList({});
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (querySearch?.length > 0) {
      getProducts(querySearch);
    }
    getProducts(querySearch);
  }, [querySearch]);

  return {
    productsList,
    loading,
  };
};

useProductsService.propTypes = {
  querySearch: PropTypes.string,
};

export default useProductsService;
