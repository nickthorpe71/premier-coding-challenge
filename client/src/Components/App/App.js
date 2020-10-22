import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ApiService from '../../Services/api-service';

import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitForm = (data) => {
    const wps = [];
    setLoading(true);
    setDisplay(false);

    for (const key in data)
      if (key !== 'office')
        wps.push(data[key]);

    ApiService.getRoute(data.office, wps)
      .then(res => {
        const formattedRes = [];
        let prev = '';
        for (const key in res) {
          if (res[key].destination !== prev)
            formattedRes.push(res[key]);
          prev = res[key].destination;
        }
        setResults(formattedRes);
        setLoading(false);
        setDisplay(true);
      });
  };

  const renderResults = () => {
    return results.map((waypoint, index) => {
      return (<li key={index}>{waypoint.destination}</li>);
    });
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="App">
      <main className="App-body">
        <h1>Route Finder</h1>
        <form className="address-form" onSubmit={handleSubmit(onSubmitForm)}>
          <h2>Office</h2>
          <label htmlFor="office" />
          <input type="text" id="office" name="office" ref={register} placeholder="123 Main St, City, State ZIP" required />
          <h2>Stops</h2>
          <label htmlFor="address1" />
          <input type="text" name="address1" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          <label htmlFor="address2" />
          <input type="text" name="address2" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          <label htmlFor="address3" />
          <input type="text" name="address3" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          <label htmlFor="address4" />
          <input type="text" name="address4" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          <label htmlFor="address5" />
          <input type="text" name="address5" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          <label htmlFor="address6" />
          <input type="text" name="address6" id="stop" ref={register} placeholder="123 Main St, City, State ZIP" />
          {loading ? <p id="loading">Calculating fastest route...</p> : <input id="submit-button" type="submit" value="Find Route" />}
        </form>
        {display
          ?
          <div className="results">
            <h3>Stops</h3>
            <ol >
              {renderResults()}
            </ol>
          </div>
          :
          <></>
        }
      </main>
    </div>
  );
};

export default App;
