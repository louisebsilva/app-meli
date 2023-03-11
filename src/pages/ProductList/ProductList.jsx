import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../ProductDetail/ProductDetail';
import { getProductList } from '../../client';

const ProductList = () => {
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const { querySearch } = location.state || '';

  const renderProductList = (products) => {
    return products.map((data, index) => (
      <ProductDetail data={data} key={index} />
    ));
  };

  useEffect(() => {
    try {
      getProductList(querySearch).then((result) => {
        return setProductList(result?.data?.data);
      });
    } catch (error) {
      setProductList([]);
    }
  }, []);

  return (
    <section data-testid="product-list">
      {renderProductList(productList)}
    </section>
  );
};

ProductList.propTypes = {
  querySearch: PropTypes.string,
};

export default ProductList;
