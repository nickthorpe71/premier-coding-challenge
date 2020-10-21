import React from 'react';
import { useForm } from "react-hook-form";

import './Waypoint.css';

const Waypoint = (props) => {
  const { register } = useForm();

  return (
    <div className={`Waypoint${props.num}`}>
      <label htmlFor={`addressField${props.num}`} />
      <input type="text" name={`addressField${props.num}`} ref={register} />
    </div>
  );
};

export default Waypoint;
