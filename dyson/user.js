const g = require('dyson-generators');

module.exports = {
  path: '/user/:id',
  method: 'GET',
  template: {
    id: (params, query, body) =>params.id,
    name: g.name,
    address: {
      zip: g.address.zipUS,
      city: g.address.city
    }
  }
}
