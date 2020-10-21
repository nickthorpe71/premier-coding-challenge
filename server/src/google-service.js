const { API_KEY } = require('./config');
const axios = require('axios');

const GoogleService = {
  getRoute(reqObj) {
    const url = buildURL(reqObj.origin, reqObj.waypoints);

    return axios.get(url)
      .then(response => {
        let legs = response.data.routes[0].legs;
        let orderedWaypoints = {};

        // the last item in the list of legs is the same as the origin so it is excluded
        for (let i = 0; i < legs.length - 1; i++) {
          const destination = legs[i].end_address;
          const distance = legs[i].distance.text;
          orderedWaypoints[i] = {
            destination,
            distance
          };
        }
        return orderedWaypoints;
      })
      .catch(error => error);
  }
};

const buildURL = (office, waypoints) => {
  const base = 'https://maps.googleapis.com/maps/api/directions/json?';
  const units = 'units=imperial';
  const origin = `origin=optimize:true|${office}`;
  const destination = `destination=${origin}`;
  const wps = `waypoints=optimize:true|${waypoints}`;

  return `${base}${units}&${origin}&${wps}&${destination}&key=${API_KEY}`;
};

module.exports = GoogleService;
