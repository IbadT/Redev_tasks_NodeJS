let people = {
    1: {
        name: 'John',
        age: 21
    }, 
    2: {
        name: 'Ivan',
        age: 17
    },
    3: {
        name: 'Max',
        age: 38
    }
}

class PeopleControllers {
    getPeople() {
        return people;
    };

    createPeople(body) {
        people = {...people, ...body};
    };

    editPeoplle(id, body) {
        for(let key in people) {
            if(id == key) {
                people[key] = body;
            }
        }
    };

    deletePeople(id) {
        const index = Object.keys(people).findIndex(i => i == id);
        if(index !== -1) {
            // delete people[index+1];
            Reflect.deleteProperty(people, index+1);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = new PeopleControllers();