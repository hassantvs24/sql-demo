const Joi = require('joi');
const express = require('express');
const router = express.Router();
const models = require('../models');
const DoctorTag = models.DoctorTags;

router.get('/', async function (req, res, next) {
    const result = await DoctorTag.findAll();
    res.send(result);
});


router.get('/:id', async function (req, res, next) {
    const result = await DoctorTag.findByPk(req.params.id);
    res.send(result);
});

router.post('/', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    try{

        const result = await DoctorTag.create({
            tag_id: req.body.tag_id,
            doctor_id: req.body.doctor_id
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
        await DoctorTag.update({
            tag_id: req.body.tag_id,
            doctor_id: req.body.doctor_id
        }, {
            where: {id: req.params.id}
        });
        
        res.send('Successfully Updated');
    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
});

router.delete('/:id', async function (req, res, next) {
    await DoctorTag.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});

function validate(data){
    const schema = {
        tag_id: Joi.number().required(),
        doctor_id: Joi.number().required()
    };

    return Joi.validate(data, schema);
}

module.exports = router;