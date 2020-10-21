const buildURL = (office, waypoints) => {
  const base = 'https://maps.googleapis.com/maps/api/directions/json?';
  const API_KEY = 'key=AIzaSyD8WOPebraRVboH1p_HHjplx3-BQVP31hw';
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

let ways = ['address 1', 'address2', 'CHICAGO', 'Clarendon Hills, IL', '925 W Carmen ave, Chicago, IL 60640', 'New York NY'];

let off = '180 N Upper Wacker Dr, Chicago, IL 60606';

console.log(buildURL(off, ways));