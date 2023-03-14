import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemByID } from '../../../../../client';

const useProductDetailsService = (url) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      getItemByID(url).then((result) => {
        setDetails(result?.data?.data);
        setLoading(false);
      });
    } catch (error) {
      setDetails({});
      setLoading(false);
    }
  }, []);

  return {
    details,
    loading,
  };
};

useProductDetailsService.propTypes = {
  url: PropTypes.string,
};

export default useProductDetailsService;
