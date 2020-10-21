import React from 'react';

import './Waypoint.css';

const Waypoint = (props) => {
  return (
    <div className="Waypoint">
      <label for={`address-field${props.num}`} />
      <input type="text" name={`address-field${props.num}`}></input>
    </div>
  );
};

export default Waypoint;
