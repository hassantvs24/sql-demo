const Joi = require('joi');
const express = require('express');
const router = express.Router();
const models = require('../models');
const DoctorLocation = models.DoctorLocation;


router.get('/', async function (req, res, next) {
    const result = await DoctorLocation.findAll();
    res.send(result);
});


router.get('/:id', async function (req, res, next) {
    const result = await DoctorLocation.findByPk(req.params.id);
    res.send(result);
});


router.post('/', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    try{
        const result = await DoctorLocation.create({
            location_id: req.body.location_id,
            doctor_id: req.body.doctor_id,
            description: req.body.description,
            contact: req.body.contact
            });
        res.send(result);
    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
});


router.put('/:id', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    try{
        await DoctorLocation.update({
            location_id: req.body.location_id,
            doctor_id: req.body.doctor_id,
            description: req.body.description,
            contact: req.body.contact
        }, {
            where: {id: req.params.id}
        });
        
        res.send('Successfully Updated');
    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
});


router.delete('/:id', async function (req, res, next) {
    await DoctorLocation.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});

function validate(data){
    const schema = {
        location_id: Joi.number().required(),
        doctor_id: Joi.number().required(),
        contact: Joi.string().max(11).min(11).required()
    };

    return Joi.validate(data, schema);
}

module.exports = router;