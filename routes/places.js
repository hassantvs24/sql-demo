const express = require('express');
const router = express.Router();
const models = require('../models');
const Division = models.Division;
const District = models.Districts;
const Upazilla = models.Upazilas;
const Union = models.Unions;


router.get('/', async function (req, res, next) {
    const result = await Division.findAll();
    res.send(result);
});

router.get('/district/:id', async function (req, res, next) {
    const result = await District.findAll({
        where: {
            division_id: req.params.id
        }
      });
    res.send(result);
});

router.get('/upazilla/:id', async function (req, res, next) {
    const result = await Upazilla.findAll({
        where: {
            district_id: req.params.id
        }
      });
    res.send(result);
});


router.get('/union/:id', async function (req, res, next) {
    const result = await Union.findAll({
        where: {
            upazilla_id: req.params.id
        }
      });
    res.send(result);
});


module.exports = router;