import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const formatPrice = (price) => {
  const currency = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return currency.format(price);
};

const Product = ({ data }) => {
  const { thumbnail, price, title, address } = data;

  return (
    <section className="product-section" data-testid="product-section">
      <img
        className="thumbnail"
        data-testid="thumbnail"
        src={thumbnail}
        alt="product image"
      />
      <div className="section-detail" data-testid="section-detail">
        <span
          className="product-price"
          data-testid="product-price"
        >{`${formatPrice(price)}`}</span>
        <p data-testid="title">{title}</p>
      </div>
      <span className="address-info" data-testid="address-info">
        {address?.state_name}
      </span>
    </section>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
