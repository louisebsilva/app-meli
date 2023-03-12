import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductsList } from '../../../client';

const useProductsListService = (querySearch) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      getProductsList(querySearch).then((result) => {
        return setProductsList(result?.data?.data);
      });
      setLoading(false);
    } catch (error) {
      setProductsList([]);
      setLoading(false);
    }
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
