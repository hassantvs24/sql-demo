const express = require('express');
const router = express.Router();
const {Location} = require('../startup/models');



router.get('/', async function (req, res, next) {
     const result = await Location.findAll();
     res.send(result);
});


router.post('/', async function (req, res, next) {
    const result = await Location.create({
         name: req.body.name, 
         division_id: req.body.division_id,
         district_id: req.body.district_id,
         upazilla_id: req.body.upazilla_id,
         union_id: req.body.union_id,
         address: req.body.address
        });
    res.send(result);
});


router.get('/:id', async function (req, res, next) {
    const result = await Location.findByPk(req.params.id);
    res.send(result);
});


router.put('/:id', async function (req, res, next) {
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
});


router.delete('/:id', async function (req, res, next) {
    await Location.destroy({
        where: {id: req.params.id}
    });
    res.send('Successfully Delete');
});


module.exports = router;