/*global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/AddTrail.css'
import Geosuggest from 'react-geosuggest'
import './css/GeoSuggest.css'
import * as api from '../api.js'

class AddRoute extends Component {
  state = {
    name: '',
    region: {
      city: '',
      lat: '',
      long: ''
    },
    id: ''
  }
  render() {
    const fixtures = [
    ];
    return (
      <main class="add-trail">
        <h2>Add Route</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Trail Name" value={this.state.name} onChange={this.handleChange} name="name"/>
          <input placeholder="Trail ID e.g. manchester_city_trail" value={this.state.id} onChange={this.handleChange} name="id"/>
          <Geosuggest
          fixtures={fixtures}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20"
          placeholder="Enter a city"
        />
        <button>Create</button>
        </form>
      </main>
    );
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // onFocus() {
  //   console.log('onFocus');
  // }
  // onBlur(value)  {
  //   console.log('onBlur', value);
  // }
  // onChange(value) {
  //   console.log('input changes to :' + value);
  // }
  onSuggestSelect = (suggest) => {
    this.setState({
      region: {
        city: suggest.gmaps.vicinity,
        lat: suggest.location.lat,
        long: suggest.location.lng
      }
    })
    console.log(suggest, "selected");
  }
  onSuggestNoResults(userInput) {
    console.log('onSuggestNoResults for :' + userInput);
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { user} = this.props
    console.log(user.username)
    api.addTrail(this.state, user.username)
  }
}

AddRoute.propTypes = {

};

export default AddRoute;