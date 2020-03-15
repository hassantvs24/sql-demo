const express = require('express');
const router = express.Router();
const {Doctor} = require('../startup/models');

router.get('/', async function (req, res, next) {
    const result = await Doctor.findAll();
    res.send(result);
});

router.get('/:id', async function (req, res, next) {
    const result = await Doctor.findByPk(req.params.id);
    res.send(result);
});


router.post('/', async function (req, res, next) {
    const result = await Doctor.create({
         name: req.body.name,
         designation: req.body.designation,
         gender: req.body.gender,
         tags: JSON.stringify(req.body.tags),
         description: req.body.description,
         note: req.body.note,
         rating: req.body.rating,
         user_rating: req.body.user_rating
        });
    res.send(result);
});


router.put('/:id', async function (req, res, next) {
    await Doctor.update({
        name: req.body.name,
         designation: req.body.designation,
         gender: req.body.gender,
         tags: JSON.stringify(req.body.tags),
         description: req.body.description,
         note: req.body.note,
         rating: req.body.rating,
         user_rating: req.body.user_rating
    }, {
        where: {id: req.params.id}
    });
    
    res.send('Successfully Updated');
});


router.delete('/:id', async function (req, res, next) {
    await Doctor.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});


module.exports = router;