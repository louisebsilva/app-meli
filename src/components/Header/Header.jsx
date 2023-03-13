import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/logo.png';
import './styles.scss';

const Header = () => (
  <header>
    <nav className="navbar" data-testid="navbar">
      <a href="/">
        <img className="logo" src={logo} alt="logo" data-testid="logo" />
      </a>
      <SearchBar placeholder="Nunca dejes de buscar" />
    </nav>
  </header>
);

export default Header;
