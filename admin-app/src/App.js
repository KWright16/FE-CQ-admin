import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./components/Header";
import Login from "./components/Login";
import ViewAllTrails from "./components/ViewAllTrails";
import ViewTrail from "./components/ViewTrail";
import AddTrail from "./components/AddTrail";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import UpdateChallenge from "./components/UpdateChallenge";
import ViewChallenge from "./components/ViewChallenge";
import LeaderBoard from "./components/LeaderBoard";
import AddChallenges from "./components/AddChallenges";
import EditChallenge from './components/EditChallenge';



class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className={!this.state.user.username ? "App-logged-out App" : "App"}>
        <Header />
        <Sidebar logout={this.logout} user={this.state.user} />
        <Footer />
        <Router>
          <Login path="/" login={this.login} user={this.state.user} />
          <ViewAllTrails path="trails" />
          <ViewTrail path="trails/:trail_id" />
          <AddTrail path="trails/new" user={this.state.user} />
          <UpdateChallenge
            path="admins/:adminName/challenges/:challengeId"
            username={this.state.user.username}
          />
          <ViewChallenge
            path="/challenges/:challengeId"
            username={this.state.user.username}
          />
          <LeaderBoard path='players' />
          <AddChallenges path='/new/challenges' username={this.state.user.username} />
          <EditChallenge path="admins/:adminName/challenges/:challengeId/edit"/>
        </Router>
      </div>
    );
  }

  componentDidMount() {
    if (sessionStorage.length > 0) {
      const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"))
        .user;
      if (loggedInUser.username) {
        this.setState({
          user: loggedInUser
        });
      }
    }
  }

  login = user => {
    sessionStorage.setItem("loggedInUser", JSON.stringify({ user }));
    this.setState({
      user
    });
  };

  logout = () => {
    sessionStorage.clear();
    this.setState({
      user: {}
    });
    navigate("/");
  };
}

export default App;
