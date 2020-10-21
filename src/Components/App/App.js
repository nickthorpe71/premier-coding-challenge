import React from 'react';
import Waypoint from '../Waypoint/Waypoint';

import './App.css';

const App = () => {
  const generateWaypoints = () => {
    const wps = [];

    for (let i = 1; i <= 6; i++) {
      wps.push(
        <Waypoint />
      );
    }

    return <ol>{wps}</ol>;
  };

  return (
    <div className="App">
      <header className="App-header">
        Route Finder
      </header>
      <body className="App-body">
        <form className="waypoint-list">
          <label for="office-field" />
          <input type="text" id="office-field" name="office-field" required />
          {generateWaypoints()}
        </form>
      </body>
    </div>
  );
};

export default App;
