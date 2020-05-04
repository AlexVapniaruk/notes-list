import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">List</Link>
      <Link to="/add">Add Node</Link>
    </div>
  );
};

export default Header;