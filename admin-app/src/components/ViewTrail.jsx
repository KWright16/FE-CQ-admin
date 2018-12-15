import React, { Component } from 'react';
import { Link } from '@reach/router';
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
    
    return (
      <main className="view-trail">
        <h2>{trail.name}</h2>
        <h3>Region: {trail.region.city}</h3>
        <h4>Duration: {trail.duration}</h4>
        
        <h3>List of locations:</h3>
      
        
      
         {trail.route.map(location => <div key={location.locationName}>Location Name: {location.locationName}<br/>
           <Link to={`/challenges/${location.challengeId}`}> Challenge Id: {location.challengeId} </Link><br/> <br/>
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



export default ViewTrail;