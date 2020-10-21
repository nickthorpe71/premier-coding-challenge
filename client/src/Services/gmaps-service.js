const GmapsService = {
  getRoute(office, waypoints) {
    const url = buildURL(office, waypoints);

    return fetch(url, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  }
};

const buildURL = (office, waypoints) => {
  const base = 'https://maps.googleapis.com/maps/api/directions/json?';
  const API_KEY = 'key=';
  const units = 'units=imperial';
  const origin = `origin=optimize:true|${formatAddress(office)}`;
  const destination = `destination=${origin}`;
  const wps = `waypoints=optimize:true|${waypoints.map((waypoint) => {
    return formatAddress(waypoint);
  })}`;

  return `${base}${units}&${origin}&${wps}&${destination}&${API_KEY}`;
};


const formatAddress = (address) => {
  return address.replace(/ /g, "+");
};

export default GmapsService;