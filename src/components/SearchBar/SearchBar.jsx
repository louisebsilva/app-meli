import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconSearch from '../../images/icons-search.svg';
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

const SearchBar = ({ placeholder, data }) => {
  const [typedWord, setTypedWord] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterData = (event) => {
    event.preventDefault();
    const typedWord = event.target.value;
    const filteredDataItems = data?.data.filter((item) => {
      return item?.title.toLowerCase().includes(typedWord.toLowerCase());
    });

    if (typedWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(filteredDataItems);
      setTypedWord(event.target.value);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    setTypedWord(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input
          className="search-input"
          data-testid="search-input"
          type="search"
          placeholder={placeholder}
          onChange={handleFilterData}
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
      {filteredData.length != 0 && renderDataResults(filteredData)}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.object,
};

export default SearchBar;
