import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProductsListService from './hooks/useProductsListService';
import Product from '../Product/Product';
import Loader from '../../components/Loader/Loader';
import './styles.scss';

const renderProductsList = (products) => {
  return products.map((data) => <Product data={data} key={data?.id} />);
};

const ProductsList = () => {
  const location = useLocation();
  const { querySearch } = location.state || '';
  const { productsList, loading } = useProductsListService(querySearch);

  return (
    <main className="product-list" data-testid="product-list">
      {loading ? <Loader /> : renderProductsList(productsList)}
    </main>
  );
};

ProductsList.propTypes = {
  querySearch: PropTypes.string,
};

export default ProductsList;
