import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <Link to="/" className="header__menu-item">List</Link>
        <Link to="/add" className="header__menu-item">Add Node</Link>
      </div>
    </div>
  );
};

export default Header;