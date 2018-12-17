import React, { Component } from "react";
import { Link } from "@reach/router";

class AddChallenges extends Component {
  render() {
    return (
      <main>
        {this.props.challengeIds.map(challengeId => (
          <div className="challengeIds">
            <Link
              to={`/admins/${this.props.username}/challenges/${challengeId}`}
            >
              {challengeId}
            </Link>
          </div>
        ))}
      </main>
    );
  }
}

export default AddChallenges;
