import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemByID } from '../../client';
import { formatPrice } from '../../utils/utils';
import Loader from '../../components/Loader/Loader';
import './styles.scss';

const ProductDetail = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const strippedURL = location.pathname.split('/');

  useEffect(() => {
    setLoading(true);
    try {
      getItemByID(strippedURL[2]).then((result) => {
        setDetails(result?.data?.data);
      });
    } catch (error) {
      setDetails({});
      setLoading(false);
    }
    setLoading(false);
  }, []);

  const renderProductDetails = () => {
    const { title, price, sold_quantity, condition, thumbnail } = details;

    return (
      <main className="wrapper" data-testid="product-details">
        <section className="thumbnail-description">
          <img src={thumbnail} className="thumbnail" />
          {/* TODO = Get Description from the other endpoint */}
          <h2>Descripción del producto</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum malesuada sollicitudin. Sed pretium eu massa quis
            scelerisque. Proin facilisis neque aliquam, congue massa nec,
            condimentum purus. Maecenas at purus vel diam faucibus imperdiet.
            Nullam ut enim nunc. Sed ut leo sit amet arcu vulputate vestibulum.
            Proin ullamcorper ut quam eget rutrum.
          </p>
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

  return loading ? <Loader /> : renderProductDetails();
};

export default ProductDetail;
