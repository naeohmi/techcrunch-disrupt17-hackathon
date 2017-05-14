const axios = require('axios');
const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/helperbee';
const db = pgp(connectionString);

//from pubhub documentation
// const console = require('console');
const xhr = require('xhr');
const query = require('codec/query_string');
const base64 = require('codec/base64');
const pubnub = require('pubnub');

module.exports = {
    axios: axios,
    db: db,
    xhr: xhr,
    query: query,
    base64: base64,
    pubnub: pubnub,
}
