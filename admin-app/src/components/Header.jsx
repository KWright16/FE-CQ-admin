import React from "react";
import { Link } from "@reach/router";
import "./css/Header.css";

const Header = props => {
  return (
    <header>
      <h1>
        <Link to="/">
          {" "}
          <img alt="cityquest" src="./assets/title.png" />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
