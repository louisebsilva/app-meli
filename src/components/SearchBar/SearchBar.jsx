import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconSearch from '../../images/icons-search.svg';
import useProductsService from './hooks/useProductsService';
import Loader from '../Loader/Loader';
import './styles.scss';

const renderDataResults = (data) => (
  <section className="data-results" data-testid="data-results">
    {data.map((item, key) => {
      return (
        <p key={key}>
          <Link
            className="data-item"
            to={`/items?search=${item?.title}`}
            state={{ querySearch: item?.title }}
          >
            {item?.title}
          </Link>
        </p>
      );
    })}
  </section>
);

const SearchBar = ({ placeholder }) => {
  const location = useLocation();
  const [typedWord, setTypedWord] = useState('');
  const { productsList, loading } = useProductsService(typedWord);

  const handleButtonClick = (event) => {
    setTypedWord(event.target.value);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="search-wrapper">
      <div className="search-bar">
        <input
          className="search-input"
          data-testid="search-input"
          type="search"
          placeholder={placeholder}
          onChange={(event) => setTypedWord(event.target.value)}
        />

        <button
          className="search-button"
          data-testid="search-button"
          onClick={handleButtonClick}
        >
          <Link
            to={`/items?search=${typedWord}`}
            state={{ querySearch: typedWord }}
          >
            <img src={iconSearch} data-testid="icon-search" />
          </Link>
        </button>
      </div>
      {productsList.length != 0 && !location.pathname.includes('items')
        ? renderDataResults(productsList)
        : null}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
