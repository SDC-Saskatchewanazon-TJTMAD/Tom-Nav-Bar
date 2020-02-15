const path = require('path');
const config = require(path.join(__dirname, config.js));

module.exports = {
  development : {
    client: 'postgresql',
    connection: `postgres://postgres:${config.pgPassword}}@localhost:5432/sdcInfo`,
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }
}