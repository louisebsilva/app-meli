import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import iconSearch from '../../images/icons-search.svg';
import './styles.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <header>
      <nav className="navbar" data-testid="navbar">
        <a href="/">
          <img src={logo} alt="logo" className="logo" data-testid="logo" />
        </a>
        <input
          type="search"
          className="search-bar"
          data-testid="search-bar"
          placeholder="Nunca dejes de buscar"
          onChange={handleSearchChange}
          value={searchInput}
        />

        <button className="search-button" data-testid="search-button">
          <Link
            to={`/items?q=${searchInput}`}
            state={{ querySearch: searchInput }}
          >
            <img src={iconSearch} data-testid="icon-search" />
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
