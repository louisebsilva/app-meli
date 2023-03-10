import React, { useState } from 'react';
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
        <button
          type="submit"
          className="search-button"
          data-testid="search-button"
        >
          <img src={iconSearch} data-testid="icon-search" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
