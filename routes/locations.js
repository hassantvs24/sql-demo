const express = require('express');
const router = express.Router();
const {Division} = require('../startup/models');



router.get('/', async function (req, res, next) {
     const result = await Division.findAll();
     res.send(result);
});

router.post('/', async function (req, res, next) {
    const result = await Division.create({ name: "Jane", bn_name: "Doe" });
    res.send(result);
});

router.get('/:id', async function (req, res, next) {
    const result = await Division.findByPk(req.params.id);
    res.send(result);
});

router.put('/:id', async function (req, res, next) {
    const result = await Division.update({
        name: req.body.name,
        bn_name: req.body.bn_name,
    }, {
        where: {id: req.params.id}
    });
    
    res.send(result);
});


module.exports = router;