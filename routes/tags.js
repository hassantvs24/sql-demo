const Joi = require('joi');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Tag = models.Tags;


router.get('/', async function (req, res, next) {
    const result = await Tag.findAll();
    res.send(result);
});

router.get('/:id', async function (req, res, next) {
    const result = await Tag.findByPk(req.params.id);
    res.send(result);
});


router.post('/', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    
    const result = await Tag.create({
         name: req.body.name
        });
    res.send(result);
});

 
router.put('/:id', async function (req, res, next) {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    await Tag.update({
        name: req.body.name
    }, {
        where: {id: req.params.id}
    });
    
    res.send('Successfully Updated');
});


router.delete('/:id', async function (req, res, next) {
    await Tag.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});



function validate(data){
    const schema = {
        name: Joi.string().min(2).required(),
    };

    return Joi.validate(data, schema);
}


module.exports = router;