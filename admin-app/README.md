# Introduction

This repository serves as the frontend for the admin app of the City Quest game; a location based multiplayer treasure hunt style game featuring question and photo recognition challenges. . It allows the admin to add or edit routes and challenges for the City Quest. The admin can also view all the trails and also individual challenges and trails. 

This web based app is built in React, using Reach Router. 

It uses Axios to make requests and relies on a Back-End API, which can be found [here](https://city-quest-game.herokuapp.com/api) on Heroku.

## Getting Started

### Prerequisites

- Node.js
- React

NC News has the following dependencies -
   ```
     "@fortawesome/fontawesome-svg-core": "^1.2.10",
    "@fortawesome/free-regular-svg-icons": "^5.6.1",
    "@fortawesome/free-solid-svg-icons": "^5.6.1",
    "@fortawesome/react-fontawesome": "^0.1.3",
    "@mdi/js": "^3.2.89",
    "@mdi/react": "^1.1.0",
    "@reach/router": "^1.2.1",
    "axios": "^0.18.0",
    "chai": "^4.2.0",
    "firebase": "^5.7.0",
    "mocha": "^5.2.0",
    "react": "^16.6.3",
    "react-dom": "^16.6.3",
    "react-geosuggest": "^2.9.0",
    "react-images-upload": "^1.2.3",
    "react-scripts": "2.1.1",
    "reactjs-localstorage": "0.0.7"
```

You can install these dependencies after cloning down the repo using 
```
npm i 
```

or installing them manually.

### Available Scripts
In the project directory, you can run:
```
npm start
```
which will run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

### Navigating the Website

- To use the web app the admin need to log in.  

**Username 'admin01' and password '123' can be used to try the app**

- Once logged in the admin can use the options on the side bar to view trails or leaderboard or to add a new trail.
- To add a new trail the admin can give the trail a unique name, and select locations from the geosuggest inputs.

- Once a new trail is created the admin can add challenges to that trail on the next page. To add an image based challenge, the 'image' option should be selected from the drop down and the desired image can be uploaded for analysis. 




