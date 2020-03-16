const Joi = require('joi');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.Users;
const key = process.env.PRIVATE_KEY;

router.post('/', async function (req, res) {

    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ where: {email: req.body.email} });
    if(!user) return res.status(400).send('Invalid Email');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid Password');

    const token = jwt.sign({ id: user.id, role: user.role }, key);//Set Token

    res.send(token);
    
});


function validate(data){
    const schema = {
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
}
module.exports = router;