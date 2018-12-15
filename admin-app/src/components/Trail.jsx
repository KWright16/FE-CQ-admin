import React from 'react';
import { Link } from '@reach/router'
import convertTime from '../utils/index.js'

const Trail = props => {
  const { trail } = props
  return (
    <li>
      <Link to={`/trails/${trail.id}`}>{trail.name}</Link>
      <p>Region: {trail.region.city}</p>
      <p>Duration: {convertTime(trail.duration)}</p>
      
    </li>
  );
};



export default Trail;