import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "./css/Sidebar.css";
import Icon from "@mdi/react";
import { mdiMapPlus, mdiMap, mdiMapSearch, mdiAccount, mdiLogoutVariant } from "@mdi/js";

class Sidebar extends Component {
  render() {
    const { user } = this.props;
    if (user.username) {
      return (
        <nav>
          <ul>
            <li>
              
              {/* <Icon path={mdiMap} size={2} /> */}
              <Link to="/trails"><Icon path={mdiMapSearch} size={2} color={'white'}/><br/>View Trails</Link>
            </li>
            <li>
              
              <Link to="/trails/new"><Icon path={mdiMapPlus} size={2} color={'white'}/><br/>Add New Trail</Link>
            </li>
            <li>
              <Icon path={mdiAccount} size={2} color={'white'}/>
              <span>Logged in as "{user.username}"</span>
            </li>
            <li>
            <Icon path={mdiLogoutVariant} size={2} color={'white'}/>
              <button onClick={this.handleLogout}>Log out</button>
            </li>
          </ul>
        </nav>
      );
    } else {
      return <nav />;
    }
  }
  handleLogout = event => {
    const { logout } = this.props;
    logout();
  };
}

Sidebar.propTypes = {};

export default Sidebar;
