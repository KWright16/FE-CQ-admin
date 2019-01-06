import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api.js";
import "./css/ViewTrail.css";
import convertTime from "../utils/index.js";

class ViewTrail extends Component {
  state = {
    trail: {
      region: {
        city: ""
      },
      route: []
    }
  };
  render() {
    const { trail } = this.state;

    return (
      <main className="view-trail">
        <div className="trail-content">
          <h2>{trail.name}</h2>
          <div className="trail-info">
            <h4>Region: {trail.region.city}</h4>
            <h4>Duration: {convertTime(trail.duration)}</h4>
          </div>
          <h3>Challenge Locations:</h3>
          {trail.route.map((location, index) => (
            <div className="location" key={location.name}>
              <h4>{index + 1}. {location.name}</h4>
              <p>Location: {location.lat.toFixed(3)}, {location.long.toFixed(3)}</p>
              <p>
                Challenge:{" "}
                <Link
                  className="vt-link"
                  to={`/challenges/${location.challengeId}`}
                >
                  {location.challengeId}{" "}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  componentDidMount() {
    const { trail_id } = this.props;
    api.getTrailByTrailId(trail_id).then(trail => {
      this.setState({
        trail
      });
    });
  }
}

export default ViewTrail;
