import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'
import './css/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  return (
    <header>
      <h1><Link to="/"> CITY
            <FontAwesomeIcon icon={faSearchLocation} />
        QUEST Manager</Link></h1>
    </header>
  );
};

export default Header;