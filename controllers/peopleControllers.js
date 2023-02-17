// let people = {
//     1: {
//         name: 'John',
//         age: 21
//     }, 
//     2: {
//         name: 'Ivan',
//         age: 17
//     },
//     3: {
//         name: 'Max',
//         age: 38
//     }
// }

// {
//     "1": {
//         "name": "John",
//         "age": 21
//     }, 
//     "2": {
//         "name": "Ivan",
//         "age": 17
//     },
//     "3": {
//         "name": "Max",
//         "age": 38
//     }
// }




const PeopleServices = require('../services/peopleServices.js')

class PeopleControllers {

    async getPeople() {

        let people = await PeopleServices.getPeople();
        return people;

    };

    async createPeople(body) {

        let createPeople = await PeopleServices.createPeople(body);
        return createPeople;

        // people = {...people, ...body};

    };

    async editPeople(id, body) {

        let editPeople = await PeopleServices.editPeople(id, body);
        return editPeople;

        // for(let key in people) {
        //     if(id == key) {
        //         people[key] = body;
        //     }
        // }

    };

    async deletePeople(id) {

        let bool = await PeopleServices.deletePeople(id);
        return bool;

        // const index = Object.keys(people).findIndex(i => i == id);
        // if(index !== -1) {
        //     // delete people[index+1];
        //     Reflect.deleteProperty(people, index+1);
        //     return true;
        // } else {
        //     return false;
        // }
        
    }
}

module.exports = new PeopleControllers();