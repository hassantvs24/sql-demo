const express = require('express');
const router = express.Router();
const {DoctorLocation} = require('../startup/models');


router.get('/', async function (req, res, next) {
    const result = await DoctorLocation.findAll();
    res.send(result);
});


router.get('/:id', async function (req, res, next) {
    const result = await DoctorLocation.findByPk(req.params.id);
    res.send(result);
});


router.post('/', async function (req, res, next) {
    const result = await DoctorLocation.create({
        location_id: req.body.location_id,
        doctor_id: req.body.doctor_id,
        description: req.body.description,
        contact: req.body.contact
        });
    res.send(result);
});


router.put('/:id', async function (req, res, next) {
    await DoctorLocation.update({
        location_id: req.body.location_id,
        doctor_id: req.body.doctor_id,
        description: req.body.description,
        contact: req.body.contact
    }, {
        where: {id: req.params.id}
    });
    
    res.send('Successfully Updated');
});


router.delete('/:id', async function (req, res, next) {
    await DoctorLocation.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});

module.exports = router;