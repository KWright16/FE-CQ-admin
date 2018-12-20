
import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

class ViewChallenge extends Component {
    state = {
        challenge: {}
    }
    render() {
        const { challenge } = this.state;
        return (
          <main>
              <h1>{this.props.challengeId}</h1>
              <div>Challenge Type: {challenge.challengeType}</div>
              <div>Question: {challenge.challenge}</div>
              <div>Answer: {challenge.answer}</div>

              <button>
                  <Link to={`/admins/${this.props.username}/challenges/${this.props.challengeId}/edit`}>
                    Edit Challenge 
                  </Link>
                </button>
          </main>   
        );
    }

    componentDidMount() {
        api.getChallengeById(this.props.challengeId)
          .then((challenge) => {
              this.setState({challenge})
          })
 
    }
}





export default ViewChallenge;