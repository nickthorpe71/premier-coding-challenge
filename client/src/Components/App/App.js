import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Waypoint from '../Waypoint/Waypoint';
import ApiService from '../../Services/api-service';

import './App.css';

const App = () => {
  const [results, setResults] = useState('');

  const onSubmitForm = (data) => {
    console.log(data);
    const wps = [];

    for (const key in data)
      if (key !== 'office')
        wps.push(data[key]);

    ApiService.getRoute(data.office, wps)
      .then(data => {
        console.log(data);
      });
    // setResults(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="App">
      <header className="App-header">
        Route Finder
      </header>
      <main className="App-body">
        <form className="address-form" onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="office" />
          <input type="text" id="office" name="office" required ref={register} />
          <label htmlFor="address1" />
          <input type="text" name="address1" ref={register} />
          <label htmlFor="address2" />
          <input type="text" name="address2" ref={register} />
          <label htmlFor="address3" />
          <input type="text" name="address3" ref={register} />
          <label htmlFor="address4" />
          <input type="text" name="address4" ref={register} />
          <label htmlFor="address5" />
          <input type="text" name="address5" ref={register} />
          <label htmlFor="address6" />
          <input type="text" name="address6" ref={register} />
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
