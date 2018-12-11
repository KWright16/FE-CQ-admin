import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'
import './css/Header.css'

const Header = props => {
  return (
    <header>
      <h1><Link to="/">City Quest Manager</Link></h1>
    </header>
  );
};

Header.propTypes = {
  
};

export default Header;