import React, { Component } from 'react';
import { Link } from '@reach/router'
import convertTime from '../utils/index.js'
import * as api from '../api';
import './css/ViewAllTrails.css'

class Trail extends Component {
  render() {
    const { trail } = this.props
    return (
      <li className="single-trail">
        <Link to={`/trails/${trail.id}`}><h3>{trail.name}</h3></Link>
        <p>Region: {trail.region.city}</p>
        <p>Duration: {convertTime(trail.duration)}</p>
        <button onClick={(event) => { this.handleDeleteClick(event, trail.id) }}> Delete Trail </button>

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