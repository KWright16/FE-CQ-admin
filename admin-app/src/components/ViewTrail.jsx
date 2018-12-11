import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import './css/ViewTrail.css'

class ViewTrail extends Component {
  state = {
    trail: {}
  }
  render() {
    const {trail_id} = this.props
    const {trail} = this.state
    return (
      <main class="view-trail">
        <h2>{trail.name}</h2>
        <h3>List of locations:</h3>
        <ol>
          <li>
            Location 1
          </li>
          <li>
            Location 2
          </li>
        </ol>
      </main>
    );
  }
  componentDidMount() {
    const {trail_id} = this.props
    api.getTrailByTrailId(trail_id)
    .then((trail) => {
      this.setState({
        trail
      })
    })
  }
}

ViewTrail.propTypes = {

};

export default ViewTrail;