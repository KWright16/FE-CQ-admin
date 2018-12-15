import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import './css/ViewTrail.css'

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
    const {trail_id} = this.props
    const {trail} = this.state
    console.log(trail.region, 'region')
    return (
      <main class="view-trail">
        <h2>{trail.name}</h2>
        <h3>Region: {trail.region.city}</h3>
        <h4>Duration: {trail.duration}</h4>
        
        <h3>List of locations:</h3>
      
        
      
         {trail.route.map(location => <div>Location Name: {location.locationName}<br/>
            Challenge Id: {location.challengeId} <br/> <br/>
         </div>)}
      
     
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