const express = require('express');
const router = express.Router();
const {Tag} = require('../startup/models');


router.get('/', async function (req, res, next) {
    const result = await Tag.findAll();
    res.send(result);
});

router.get('/:id', async function (req, res, next) {
    const result = await Tag.findByPk(req.params.id);
    res.send(result);
});


router.post('/', async function (req, res, next) {
    const result = await Tag.create({
         name: req.body.name
        });
    res.send(result);
});


router.put('/:id', async function (req, res, next) {
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


module.exports = router;