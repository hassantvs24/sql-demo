const express = require('express');
const error = require('../middleware/error');
const locations = require('../routes/locations');
const tags = require('../routes/tags');
const doctors = require('../routes/doctors');
const doctorlocation = require('../routes/doctorlocations');
const places = require('../routes/places');
const auth = require('../routes/auth');
const users = require('../routes/users');

module.exports = function (app){

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.use(express.json()); // for parsing application/json
    app.use(express.static('public'));//Access public asset
    app.use(error);
    app.use('/api/locations', locations);
    app.use('/api/tags', tags);
    app.use('/api/doctors', doctors);
    app.use('/api/doctor-location', doctorlocation);
    app.use('/api/places', places);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
}