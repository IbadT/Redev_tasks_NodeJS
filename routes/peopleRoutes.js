const express = require('express');
const router = express.Router();
const PeopleControllers = require('../controllers/peopleControllers.js');


router.get('/people', async (req, res) => {
    try {
        const people = await PeopleControllers.getPeople();
        res.send(people);
    } catch (error) {
        console.log(error);
    }
})

router.post('/create', async (req, res) => {
    try {
        let createPeople = await PeopleControllers.createPeople(req.body);
        res
            .status(201)
            .send(createPeople);
    } catch (error) {
        console.log(error);
    }
});


// { "name": "TEST_TEST_TEST", "age": 55555323}
router.put('/edit/:id', async (req, res) => {
    try {
        let editPeople = await PeopleControllers.editPeople(req.params.id, req.body);
        res.send(editPeople);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const bool = await PeopleControllers.deletePeople(req.params.id, );
        res.send(bool);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;