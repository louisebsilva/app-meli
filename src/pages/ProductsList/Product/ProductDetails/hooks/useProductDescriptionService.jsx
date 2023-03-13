import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemDescription } from '../../../../../client';

const useProductDescription = (id) => {
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(false);

  const getProductDescription = useCallback(async (id) => {
    setLoading(true);
    try {
      getItemDescription(id).then((result) => {
        setDescription(result?.data?.data?.plain_text);
      });
      setLoading(false);
    } catch (error) {
      setDescription({});
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getProductDescription(id);
    }
  }, [id]);

  return {
    description,
    loading,
  };
};

useProductDescription.propTypes = {
  id: PropTypes.string,
};

export default useProductDescription;
