const ApiService = {
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
  const base = 'https://warm-everglades-02341.herokuapp.com/route';
  const origin = `origin=${formatAddress(office)}`;
  const wps = `waypoints=${waypoints.map((waypoint) => {
    return formatAddress(waypoint);
  }).join('|')}`;

  return `${base}?${origin}&${wps}`;
};


const formatAddress = (address) => {
  let newAddress = address;

  if (newAddress.includes(',') && newAddress.includes(' ')) {
    newAddress = address.replace(/ /g, "+");
    newAddress = newAddress.replace(/,/g, "");
  } else if (newAddress.includes(',')) {
    newAddress = newAddress.replace(/,/g, "+");
  } else if (newAddress.includes(' ')) {
    newAddress = newAddress.replace(/ /g, "+");
  }

  return newAddress;
};

export default ApiService;