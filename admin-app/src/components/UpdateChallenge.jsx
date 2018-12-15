import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import * as api from '../api';

class UpdateChallenge extends Component {
    state = {
        challengeType: '',
        question: '',
        answer: '',
        picture: ''
    }

    render() {
        return (
            <main>
                <h2>{this.props.challengeId}</h2> <br/> <br/>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.challengeType} onChange={this.handleChange} >
                        <option >Choose Challenge Type</option>
                        <option value = 'question'> Question </option>
                        <option value= 'image-recognition'> Image Recognition </option>
                    </select> <br/> <br/>
                    
                    { this.state.challengeType === 'question'? 
                    <div> 
                        <input placeholder = 'question ' 
                            value={this.state.value} name='question'
                            onChange={this.handleInputChange}>
                        </input> 
                        <br/>

                        <input placeholder = 'answer '
                            value={this.state.value} name='answer'
                            onChange={this.handleInputChange}>
                        </input>

                    </div> : this.state.challengeType === 'image-recognition'? 
                    <div>
                       <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </div> : <div></div>}
                    <button>Update</button>
                </form>
            </main>   
        );
    }

    handleChange = (event) => {
        this.setState({challengeType: event.target.value});
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onDrop = (picture) => {
        this.setState({picture});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { challengeType, question, answer, picture } = this.state;
        const { challengeId, username } = this.props;
        api.updateChallenge(challengeType, question, answer, picture[0], challengeId, username)
        
    }
}


export default UpdateChallenge;