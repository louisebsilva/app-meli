import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatPrice } from '../../../../utils/utils';
import Loader from '../../../../components/Loader/Loader';
import useProductDetailsService from './hooks/useProductDetailsService';
import useProductDescriptionService from './hooks/useProductDescriptionService';
import './styles.scss';

const ProductDetails = () => {
  const location = useLocation();
  const strippedURL = location.pathname.split('/');

  const { details, loading: loadingDetails } = useProductDetailsService(
    strippedURL[2]
  );
  const { id, title, price, sold_quantity, condition, thumbnail } = details;
  const { description, loading: loadingDescription } =
    useProductDescriptionService(id);

  return loadingDetails ? (
    <Loader />
  ) : (
    <main className="wrapper" data-testid="product-details">
      <section className="thumbnail-description">
        <img src={thumbnail} className="thumbnail" />
        <h2>Descripción del producto</h2>
        {loadingDescription ? (
          <Loader />
        ) : Object.keys(description).length > 0 ? (
          <p className="description">{description}</p>
        ) : null}
      </section>
      <section className="price-section">
        <span>{`${condition} - ${sold_quantity} vendidos`}</span>
        <h2>{title}</h2>
        <p>{formatPrice(price)}</p>
        <button>Comprar</button>
      </section>
    </main>
  );
};

export default ProductDetails;
