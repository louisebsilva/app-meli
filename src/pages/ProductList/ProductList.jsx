import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../Product/Product';
import { getProductList } from '../../client';
import './styles.scss';

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
    <main className="product-list" data-testid="product-list">
      <section className="product-section">
        {renderProductList(productList)}
      </section>
    </main>
  );
};

ProductList.propTypes = {
  querySearch: PropTypes.string,
};

export default ProductList;
