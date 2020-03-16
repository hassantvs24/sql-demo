const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.Users;
const auth = require('../middleware/auth');


router.get('/', auth, async function (req, res, next) {
    const result = await User.findAll({
        attributes: ['name', 'email', 'role']
      });
    res.send(result);
});

router.post('/', async function (req, res, next) {

    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    try{
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
    
        const result = await User.create({
             name: req.body.name,
             email: req.body.email,
             password: hashed,
             role: req.body.role || 'Admin'
            });

        res.send(result);
    }catch(ex){
        res.status(400).send(`Error: ${ex.message}`);
    }
    
});


function validate(data){
    const schema = {
        name: Joi.string().min(4).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
}


module.exports = router;