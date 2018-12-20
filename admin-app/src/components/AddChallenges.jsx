import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import UpdateChallenge from './UpdateChallenge';

class AddChallenges extends Component {

  state = {
    challengeIds: [],
    trailId: JSON.parse(localStorage.trailId)
  }
  render() {
    const { challengeIds } = this.state
    
    return (
      <main>
        <h2>Create Challenges</h2> 
        {challengeIds.map(challengeId => (
          <div key = {challengeId} className="challengeIds">
          
            <Link
              to={`/admins/${this.props.username}/challenges/${challengeId}`}
            >
              {challengeId}
            </Link>

          </div>
         ))} 
         <button onClick={this.handleClick}>All Done</button>
      </main>
    );
  }
  
  componentDidMount() {

    if (localStorage.challengeIds) {
      this.setState({
        challengeIds: JSON.parse(localStorage.challengeIds)
      })
    } else {

      this.setState({
        challengeIds: this.props.location.state.challengeIds
      })
    }
    
  }

  handleClick = () => {
    localStorage.removeItem('challengeIds')
    const { trailId } = this.state;
    console.log(trailId, ' add challenges')
    navigate(`/trails/${trailId}`)
    
  }
  
}

export default AddChallenges;
