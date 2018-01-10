const faker = require('faker');

module.exports = {
  path: '/http/users',
  template: [{
    id: params => 'test',
    name: () => faker.name.findName(),
    email: () => faker.internet.email(),
    status: 'test',
    lorem: true
  }],
  container: {
    meta: (params, query, data) => {
      return data.length
    },
    data: {
      all: [],
      the: {
        way: {
          here: (params, query, data) => data
        }
      }
    }
  }
}
