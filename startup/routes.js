const express = require('express');
const locations = require('../routes/locations');

module.exports = function (app){
    app.use(express.json()); // for parsing application/json
    app.use(express.static('public'));//Access public asset
    app.use('/api/locations', locations);
}