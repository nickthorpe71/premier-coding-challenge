# Premier Coding Challenge

## Live Site
https://premier-coding-challenge.vercel.app/

## Intro
This application uses the Google Maps API directions endpoint and built in optimization function to calculate the fastest rouve from a start location, to 6 waypoints and back to the start location. This method considers distance, time, and other factors to get the fastest time per googles documentation. 

The alternative solution I found was to use the distance matrix endpoint and determine all possible distances from each waypoint to the others. This would require a graph algorithm on the server where the nodes are the destinations and the edges are weighted by distance.

## Client

### Setup

Install the node dependencies with npm install

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.

## Server

### Setup

Install the node dependencies with npm install

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the server in development mode.
By default the server will run on http://localhost:8000/

The server will restart automatically if you make edits in development mode.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
