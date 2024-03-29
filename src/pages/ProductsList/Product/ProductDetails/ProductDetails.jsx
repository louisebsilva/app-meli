import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  const { id, title, price, sold_quantity, condition, pictures } = details;

  const { description, loading: loadingDescription } =
    useProductDescriptionService(id);

  return (
    <main data-testid="product-details">
      {loadingDetails ? (
        <Loader />
      ) : Object.keys(details).length > 0 ? (
        <div className="wrapper">
          <section className="picture-description">
            <img
              src={pictures[0]?.url}
              alt="Product image"
              className="picture"
            />
            <h2>Descripción del producto</h2>
            {loadingDescription ? (
              <Loader />
            ) : Object.keys(description).length > 0 ? (
              <p className="description">{description}</p>
            ) : (
              <p className="description">
                No hay descripción para este producto.
              </p>
            )}
          </section>
          <section className="price-section">
            <span>{`${condition} - ${sold_quantity} vendidos`}</span>
            <h2>{title}</h2>
            <p>{formatPrice(price)}</p>
            <button role="button" aria-label="Buy product">
              Comprar
            </button>
          </section>
        </div>
      ) : (
        <p className="nothing-found">No se encontraron productos</p>
      )}
    </main>
  );
};

ProductDetails.propTypes = {
  productImage: PropTypes.object,
};

export default ProductDetails;
