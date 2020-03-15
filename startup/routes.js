const express = require('express');
const error = require('../middleware/error');
const locations = require('../routes/locations');
const tags = require('../routes/tags');
const doctors = require('../routes/doctors');
const doctorlocation = require('../routes/doctorlocations');

module.exports = function (app){
    app.use(express.json()); // for parsing application/json
    app.use(express.static('public'));//Access public asset
    app.use(error);
    app.use('/api/locations', locations);
    app.use('/api/tags', tags);
    app.use('/api/doctors', doctors);
    app.use('/api/doctor-location', doctorlocation);
    
}