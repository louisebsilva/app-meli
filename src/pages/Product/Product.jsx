import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/utils';
import './styles.scss';

const Product = ({ data }) => {
  const navigate = useNavigate();
  const { id, thumbnail, price, title, address } = data;

  return (
    <section
      className="product-section"
      data-testid="product-section"
      onClick={() => navigate(`/items/${id}`)}
    >
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
