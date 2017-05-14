const axios = require('axios');
const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/helperbee';
const db = pgp(connectionString);

const connectionString = 'postgres://naeohmi@localhost:5432/helperbee';
const db = pgp(process.env.DATABASE_URL || connectionString);



//from pubhub documentation
const xhr = require('xhr');
const pubnub = require('pubnub');


const express = require('express');
const controller = require('../controllers/usersController');
const router = express.Router();
const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');


module.exports = {
    axios: axios,
    db: db,
    xhr: xhr,
    pubnub: pubnub,
    express: express,
    controller: controller,
    router: router,
    authHelpers: authHelpers,
    passport: passport,
}