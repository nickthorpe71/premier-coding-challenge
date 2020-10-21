import React, { useState } from 'react';
import Waypoint from '../Waypoint/Waypoint';

import './App.css';

const App = () => {
  const [results, setResults] = useState('');

  const generateWaypoints = () => {
    const wps = [];

    for (let i = 1; i <= 6; i++) {
      wps.push(
        <Waypoint key={i} num={i} />
      );
    }

    return wps;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);

    setResults('e.target');
  };

  return (
    <div className="App">
      <header className="App-header">
        Route Finder
      </header>
      <main className="App-body">
        <form className="address-form" onSubmit={handleSubmit}>
          <label htmlFor="office-field" />
          <input type="text" id="office-field" name="office-field" required />
          {generateWaypoints()}
          <input type="submit" value="Find" />
        </form>
        <ol className="results">
          {results}
        </ol>
      </main>
    </div>
  );
};

export default App;
