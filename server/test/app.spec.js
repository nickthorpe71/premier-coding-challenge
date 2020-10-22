const app = require('../src/app');

describe('App', () => {
  it('GET /route responds with 200 and an object with multiple addresses', () => {
    const responseObj = {
      '0': {
        'destination': '925 W Carmen Ave, Chicago, IL 60640, USA',
        'distance': '1 ft'
      },
      '1': {
        'destination': 'Winnetka, IL, USA',
        'distance': '16.5 mi'
      },
      '2': {
        'destination': 'Long Grove, IL, USA',
        'distance': '17.0 mi'
      },
      '3': {
        'destination': 'Long Grove, IL, USA',
        'distance': '138 ft'
      },
      '4': {
        'destination': 'Elmhurst, IL, USA',
        'distance': '25.0 mi'
      },
      '5': {
        'destination': 'Western Springs, IL, USA',
        'distance': '8.2 mi'
      }
    };
    return supertest(app)
      .get('/route?origin=925+W+Carmen+Ave+Chicago+IL&waypoints=Long+Grove+IL|925+W+Carmen+Ave+Chicago+IL|Long+Grove+IL|Winnetka+IL|Western+Springs+IL|Elmhurst+IL')
      .expect(200, responseObj);
  });
});