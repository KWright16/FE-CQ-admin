import React, { Component } from 'react';
import * as api from '../api';
import './css/leaderboard.css'

class LeaderBoard extends Component {

    state = {
        players: []
    }
    render() {

        const { players } = this.state;

        return (

            <main className='leaderboard'>
                <h2>Leader Board</h2>
                <div className='leaderboard-content'>
                    <div className='leaderboard-c'>
                        {players.map(player => <div>
                            Player: {player.playerName} <br />
                            Time Taken:  {player.totalTime} <br /> <br />
                        </div>)}
                    </div>
                </div>
            </main >

        );
    }

    componentDidMount() {
        api.getLeaderBoardPlayers()
            .then(players => {
                const sortedPlayers = players.sort((a, b) => {
                    return a.totalTime - b.totalTime
                })

                this.setState({
                    players: sortedPlayers
                })
            })
    }
}



export default LeaderBoard;