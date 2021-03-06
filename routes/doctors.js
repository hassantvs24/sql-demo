const Joi = require('joi');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Doctor = models.Doctors;
const auth = require('../middleware/auth');

router.get('/', async function (req, res, next) {
    const result = await Doctor.findAll();
    res.send(result);
});

router.get('/:id', async function (req, res, next) {
    const result = await Doctor.findByPk(req.params.id);
    res.send(result);
});


router.post('/', auth, async function (req, res, next) {

    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    const result = await Doctor.create({
         name: req.body.name,
         designation: req.body.designation,
         gender: req.body.gender,
         description: req.body.description,
         note: req.body.note,
         rating: req.body.rating,
         user_rating: req.body.user_rating
        });
    res.send(result);
});


router.put('/:id', auth, async function (req, res, next) {

    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    await Doctor.update({
         name: req.body.name,
         designation: req.body.designation,
         gender: req.body.gender,
         description: req.body.description,
         note: req.body.note,
         rating: req.body.rating,
         user_rating: req.body.user_rating
    }, {
        where: {id: req.params.id}
    });
    
    res.send('Successfully Updated');
});


router.delete('/:id', auth, async function (req, res, next) {
    await Doctor.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});


function validate(data){
    const schema = {
        name: Joi.string().min(4).required()
    };

    return Joi.validate(data, schema);
}


module.exports = router;