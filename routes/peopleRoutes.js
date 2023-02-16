const express = require('express');
const router = express.Router();
const PeopleControllers = require('../controllers/peopleControllers.js');


router.get('/people', (req, res) => {
    try {
        const people = PeopleControllers.getPeople();
        res.send(people);
    } catch (error) {
        console.log(error);
    }
})

router.post('/create', (req, res) => {
    try {
        PeopleControllers.createPeople(req.body);
        res
            .status(201)
            .send(req.body);
    } catch (error) {
        console.log(error);
    }


    // let key = Object.keys(people)
    // let ind = +key[key.length-1] + 1
    // people = {...people, 4: req.body}

});


// { "name": "TEST_TEST_TEST", "age": 55555323}
router.put('/edit/:id', (req, res) => {
    try {
        PeopleControllers(req.params.id, req.body);
        res.send(req.body);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id', (req, res) => {
    try {
        const bool = PeopleControllers.deletePeople(req.params.id, );
        res.send(bool);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;