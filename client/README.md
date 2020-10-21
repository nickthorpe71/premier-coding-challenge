This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Site

## Intro
I used the directions endpoint and the build in optimization from google. I realize that the instructions say to consider distance and not driving time but after some reading I found this optimize feature considers many factors: 

Google Maps API Docs 

"Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account when deciding which route is the most efficient."

The other option I saw was to use the distance matrix endpoint and determine all possible distances from each waypoint to the others. This would require a graph algorithm on the server where the nodes are the destinations and the edges are weighted by distance. If this is the approach you were looking for I'd be happy to reimplement.

## Setup

1. Install the node dependencies npm install
2. Move the example Environment file to .env that will be ignored by git and read by the express server mv example.env .env

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.