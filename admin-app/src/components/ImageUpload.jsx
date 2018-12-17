import React, { Component } from "react";
import PropTypes from "prop-types";
import { storage } from "../firebase";

class ImageUpload extends Component {
  state = {
    image: null,
    url: ""
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }

  handleChange = event => {
    console.log("were in here");
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = event => {
    event.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
      },
      error => {
        console.log(error); //complete function
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.props.setURL(url);
          });
      }
    );
  };
}

ImageUpload.propTypes = {};

export default ImageUpload;
