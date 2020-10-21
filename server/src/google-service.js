const { API_KEY } = require('./config');
const axios = require('axios');

const GoogleService = {
  getRoute(reqObj) {
    const url = buildURL(reqObj.origin, reqObj.waypoints);

    return axios.get(url)
      .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
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
