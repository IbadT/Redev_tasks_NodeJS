// const users = [
//     {id: 0, name: "Pasha", isMan: true, age: 6},
//     {id: 1, name: "John", isMan: true, age: 27},
//     {id: 2, name: "Dasha", isMan: false, age: 11},
//     {id: 3, name: "Max", isMan: true, age: 32},
//     {id: 4, name: "Alla", isMan: false, age: 18},
// ];

// [
//     { id: 0, name: "Pasha", isMan: true, age: 6 },
//     { id: 1, name: "John", isMan: true, age: 27 },
//     { id: 2, name: "Dasha", isMan: false, age: 11 },
//     { id: 3, name: "Max", isMan: true, age: 32 },
//     { id: 4, name: "Alla", isMan: false, age: 18 },
//     { id: 333, name: "Anya", isMan: false, age: 16 },
// ];



const fs = require('fs');

class UserService {
    getUsers() {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                res(JSON.parse(data));
            })
        })
    };

    createUser(body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let res = JSON.parse(data)
                res.push(body)
                fs.writeFile('./data/usersData.json', JSON.stringify(res), (err) => {
                    if(err) throw err;
                })
            })
        })
    };

    editUser(id, body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let jsonData = JSON.parse(data).map(i => i.id == id ? body : i);

                fs.writeFile('./data/usersData.json', JSON.stringify(jsonData), (err) => {
                    if(err) throw err;
                })

            })

        })
    };

    async deleteUser(id) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let result = JSON.parse(data)
                let index = result.findIndex(i => i.id == id);
                result.splice(index, 1);

                fs.writeFile('./data/usersData.json', JSON.stringify(result), (err) => {
                    if(err) res(false);
                    res(true);
                })
            })
        })
    };

    editUserParam(id, age) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let parseData = JSON.parse(data);
                let result = parseData.map(i => i.id == id ? {...i, age: age} : i);
                
                fs.writeFile('./data/usersData.json', JSON.stringify(result), (err) => {
                    if(err) throw err;
                    res(result[id]);
                })
            })
        })
    };

    async getUserForGender(gender) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let parseData = JSON.parse(data);
                let user = parseData.filter(i => gender === 'M' ? i.isMan : !i.isMan);
                res(user);
            })
        })
    };

    async getFilterUsers(min, max) {
        return new Promise((res, rej) => {
            fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
                if(err) throw err;
                let parseData = JSON.parse(data);
                let result = parseData.filter(i => i.age >= min && i.age <= max);
                res(result);
            })
        })
    }
}


module.exports = new UserService();