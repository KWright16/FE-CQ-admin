import React, {Component} from 'react';
import { Link } from '@reach/router'
import convertTime from '../utils/index.js'
import * as api from '../api';

class Trail extends Component {
  render () {
    const { trail } = this.props
    return (
      <li>
        <Link to={`/trails/${trail.id}`}>{trail.name}</Link>
        <p>Region: {trail.region.city}</p>
        <p>Duration: {convertTime(trail.duration)}</p>
        <button onClick={(event) => {this.handleDeleteClick(event, trail.id)}}> Delete Trail </button>

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