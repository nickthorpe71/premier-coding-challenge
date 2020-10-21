const { API_KEY } = require('./config');
const axios = require('axios');

const GoogleService = {
  getRoute(reqObj) {
    const url = buildURL(reqObj.origin, reqObj.waypoints);

    return axios.get(url)
      .then(response => {
        let legs = response.data.routes[0].legs;
        let orderedWaypoints = {};

        for (let i = 0; i < legs.length - 1; i++) {

          const destination = legs[i].end_address;
          const distance = legs[i].distance;
          orderedWaypoints[destination] = distance.text;
        }

        return orderedWaypoints;
      })
      .catch(error => error);
  }
};

const buildURL = (office, waypoints) => {
  const base = 'https://maps.googleapis.com/maps/api/directions/json?';
  const units = 'units=imperial';
  const origin = `origin=${office}`;
  const destination = `destination=${origin}`;
  const wps = `waypoints=${waypoints}`;

  return `${base}${units}&${origin}&${wps}&${destination}&key=${API_KEY}`;
};

module.exports = GoogleService;
