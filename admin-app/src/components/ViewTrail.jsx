import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api.js'
import './css/ViewTrail.css';
import convertTime from '../utils/index.js'

class ViewTrail extends Component {
  state = {
    trail: {
      region: {
        city: ''
      },
      route: []
    }
  }
  render() {

    const { trail } = this.state

    return (
      <main className="view-trail">
        <h2>{trail.name}</h2>
        <div className="trail-content">
          <h3>Region: {trail.region.city}</h3>
          <h4>Duration: {convertTime(trail.duration)}</h4>

          <h3>List of locations:</h3>



          {trail.route.map(location => <div className="location" key={location.locationName}><h4>Location Name: {location.locationName}</h4><br />
            <p>Latitude: {location.lat} <br></br>
              Longitude: {location.long} <br></br>
              Challenge Id: <Link className="vt-link" to={`/challenges/${location.challengeId}`}>{location.challengeId} </Link><br /> <br />
            </p></div>)}
        </div>

      </main>
    );
  }
  componentDidMount() {
    const { trail_id } = this.props
    api.getTrailByTrailId(trail_id)
      .then((trail) => {

        this.setState({
          trail
        })
      })
  }
}



export default ViewTrail;