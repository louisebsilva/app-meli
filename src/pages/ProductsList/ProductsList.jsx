import React from 'react';
import { useLocation } from 'react-router-dom';
import useProductsListService from '../ProductsList/hooks/useProductListService';
import Product from './Product/Product';
import Loader from '../../components/Loader/Loader';
import './styles.scss';

const ProductsList = () => {
  const location = useLocation();
  const { querySearch } = location.state || '';
  const { productsList, loading } = useProductsListService(querySearch);

  return (
    <main className={loading ? '' : 'product-list'} data-testid="product-list">
      {productsList.length > 0 ? (
        productsList.map((data) => <Product data={data} key={data?.id} />)
      ) : loading ? (
        <Loader />
      ) : (
        <p>No se encontraron productos</p>
      )}
    </main>
  );
};

export default ProductsList;
