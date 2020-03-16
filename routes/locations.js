const Joi = require('joi');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Location = models.Locations;



router.get('/', async function (req, res, next) {
     const result = await Location.findAll();
     res.send(result);
});


router.post('/', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    try{
        const result = await Location.create({

         name: req.body.name, 
         division_id: req.body.division_id,
         district_id: req.body.district_id,
         upazilla_id: req.body.upazilla_id,
         union_id: req.body.union_id,
         address: req.body.address
        });

        res.send(result);

    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
});


router.get('/:id', async function (req, res, next) {
    const result = await Location.findByPk(req.params.id);
    res.send(result);
});


router.put('/:id', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    
    try{
        await Location.update({
            name: req.body.name, 
            division_id: req.body.division_id,
            district_id: req.body.district_id,
            upazilla_id: req.body.upazilla_id,
            union_id: req.body.union_id,
            address: req.body.address
        }, {
            where: {id: req.params.id}
        });
        
        res.send('Successfully Updated');
    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
});


router.delete('/:id', async function (req, res, next) {
    await Location.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});


function validate(data){
    const schema = {
        name: Joi.string().min(4).required(),
        division_id: Joi.number().required(),
        district_id: Joi.number().required(),
        upazilla_id: Joi.number().required(),
        union_id: Joi.number().required(),
        address: Joi.string().min(3).required()
    };

    return Joi.validate(data, schema);
}


module.exports = router;