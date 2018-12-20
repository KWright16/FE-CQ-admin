/*global google */
import React, { Component } from "react";
import "./css/AddTrail.css";
import Geosuggest from "react-geosuggest";
import "./css/GeoSuggest.css";
import * as api from "../api.js";
import { navigate } from "@reach/router";

class AddTrail extends Component {
  state = {
    route: [],
    name: "",
    region: {
      city: "",
      lat: "",
      long: ""
    },
    challengeIds: [],
    //displayChallengeAdder: false,
    noOfLocations: ''
  };

  render() {
    const fixtures = [];
    const { noOfLocations } = this.state;
    const locationsGeos = this.createGeoLocationsInput(noOfLocations)

    return (
      <main className="add-trail">
        <h2>Add Trail</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Trail Name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <Geosuggest
            fixtures={fixtures}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onSuggestSelect={this.onSuggestSelect}
            onSuggestNoResults={this.onSuggestNoResults}
            location={new google.maps.LatLng(51.50853, -0.12574)}
            radius="20"
            placeholder="Enter a city"
          />
          
          <h3>Add routes to the Trail</h3>
          <input
            placeholder="Enter the number of locations to add to route"
            value={this.state.noOfLocations}
            onChange={this.handleChange}
            name="noOfLocations"
          />

          

          {locationsGeos.map((geo => geo))}

          
          <button>Create</button>
        </form>

        {/* {this.state.displayChallengeAdder && (
          <AddChallenges
            challengeIds={this.state.challengeIds}
            username={this.props.user.username}
          />
        )} */}
      </main>
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createGeoLocationsInput = (locationsNumber) => {
    const geoLocsArray = [];

    for (let i = 0; i < locationsNumber; i++) {
      geoLocsArray.push( <Geosuggest
      onChange={this.onLocationChange}
      onSuggestSelect={this.onSuggestSelectLocation}
      onSuggestNoResults={this.onSuggestNoResults}
      location={new google.maps.LatLng(51.50853, -0.12574)}
      radius="20"
      placeholder="Enter a location"
    />)
    }

    return geoLocsArray;
  }

  onSuggestSelect = suggest => {
    if (suggest) {
      this.setState({
        region: {
          city: suggest.gmaps.vicinity,
          lat: suggest.location.lat,
          long: suggest.location.lng
        }
      });
    }


  };


  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.props;

    api
      .addTrail(this.state, user.username)
      .then(id => {
        return api.addRoute(this.state.route, user.username, id);
      })
      .then(challengeIds => {
       localStorage.setItem('challengeIds', JSON.stringify(challengeIds))
       const trailId = this.state.name.replace(/\s/g, "_").toLowerCase();
       localStorage.setItem('trailId', JSON.stringify(trailId))
       
        navigate('/new/challenges', {
          //replace: true,
          state: {
            challengeIds,
            trailId
          }
        })
        
      });
  };



  onSuggestSelectLocation = suggest => {

    if (suggest) {

      this.setState({
        route: this.state.route.concat({
          locationName: suggest.gmaps.name,
          lat: suggest.location.lat,
          long: suggest.location.lng
        })
      });

    }

  };
}

export default AddTrail;
