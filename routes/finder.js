const express = require('express');
const router = express.Router();
const models = require('../models');
const Division = models.Division;
const District = models.Districts;
const Upazilas = models.Upazilas;
const Union = models.Unions; 
const DoctorLocation = models.DoctorLocation;
const Doctor = models.Doctors;
const DoctorTag = models.DoctorTags;
const Location = models.Locations;

router.post('/', async function (req, res, next) {

    let division = req.body.division_id;
    let district = req.body.district_id;
    let upazilla = req.body.upazilla_id;
    let union = req.body.union_id;

    let whereCon = [{division_id: division}, {district_id: district}, {upazilla_id: upazilla}, {union_id: union}];

    if(!union){
        whereCon = [{division_id: division}, {district_id: district}, {upazilla_id: upazilla}];
    }

    if(!upazilla){
        whereCon = [{division_id: division}, {district_id: district}];
    }

    if(!district){
        whereCon = [{division_id: division}];
    }

    if(!division){
        whereCon = [];
    }

    const location = await Location.findAll({
        where: whereCon,
        attributes: ["id"]
    }).map(u => u.get("id"));

    const doctor = await DoctorTag.findAll({
        where: {tag_id: req.body.tag_id},
        attributes: ["doctor_id"]
    }).map(p => p.get("doctor_id"));


    await DoctorLocation.findAll({
        where: {
            location_id: location,
            doctor_id:doctor
        },
      include: [
            {model: Doctor, as: 'doctor'},
            {model: Location, as: 'location', include: [
                {model: Division, as: 'division'},
                {model: District, as: 'district'},
                {model: Upazilas, as: 'upazilla'},
                {model: Union, as: 'union'}
            ]}
        ]
    }).then(doctor =>{
        res.send(doctor);
    }).catch( err => {
        res.status(400).send(`Error: ${err}`);
    });


    
});



module.exports = router;