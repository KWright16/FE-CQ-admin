import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import Trail from './Trail'
import './css/ViewAllTrails.css'

class ViewAllTrails extends Component {
  state = {
    trails: []
  }
  render() {
    const { trails } = this.state
    return (
      <main class="view-trails">
        <h2>List of Trails</h2>
        <ul>
          {trails.map((trail) => {
            return <Trail trail={trail}/>
          })}
        </ul>
      </main>
    );
  }
  componentDidMount() {
    api.getAllTrails()
    .then((trails) => {
      this.setState({
        trails
      })
    })
  }
}

ViewAllTrails.propTypes = {

};

export default ViewAllTrails;