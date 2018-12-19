import React, { Component } from 'react';
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
      <main className="view-trails">
        <h2 className="header">List of Trails</h2>
        <ul>
          {trails.map((trail) => {

            return <Trail key={trail.id} removeDeletedTrail={this.removeDeletedTrail} trail={trail}/>

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

  removeDeletedTrail = (trailId) => {

    const filteredTrails = this.state.trails.filter(trail => trail.id !== trailId)
    this.setState({

      trails: filteredTrails
    })
  }
}


export default ViewAllTrails;