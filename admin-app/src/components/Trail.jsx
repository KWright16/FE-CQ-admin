import React, { Component } from 'react';
import { Link } from '@reach/router'
import convertTime from '../utils/index.js'
import * as api from '../api';
import './css/ViewAllTrails.css'

class Trail extends Component {
  render() {
    const { trail } = this.props
    return (
      <li>
        <h3><Link to={`/trails/${trail.id}`}>{trail.name}</Link></h3>
        <p>Region: {trail.region.city}</p>
        <p>Duration: {convertTime(trail.duration)}</p>
        <div id="deletebutton">
        <button onClick={(event) => { this.handleDeleteClick(event, trail.id) }}> Delete Trail </button>
        </div>

      </li>
    );
  }

  handleDeleteClick = (event, id) => {
    event.preventDefault()
    api.deleteTrail(id)
      .then(() => {
        this.props.removeDeletedTrail(id)
      })

  }

};



export default Trail;