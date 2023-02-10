
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;


app.listen(PORT, () => console.log('Server is started...'));


const users = [
    {id: 1, name: "Pasha", isMan: true, age: 6},
    {id: 2, name: "John", isMan: true, age: 27},
    {id: 3, name: "Dasha", isWoman: true, age: 11},
    {id: 4, name: "Max", isMan: true, age: 32},
    {id: 5, name: "Alla", isWoman: true, age: 18},
];


// 1) GET /users
// (возвращает массив всех пользователей)
app.get('/users', (req, res) => {
    res.send(users);
});


// 2) POST /user
// (добавляет нового пользователя в массив. Возвращает нового пользователя)
// { "id": 6, "name": "Natasha", "isMan": false, "age": 22222 }
app.post('/user', (req, res) => {
    users.push(req.body);
    res
        .send(req.body)
        .status(201);
});


// 3) PUT /user/:id
// (изменяет пользователя по id. Возвращает обновленного пользователя)
// { "id": 1, "name": "TEST_Pasha_TEST", "isMan": false, "age": 23 }
app.put('/user/:id', (req, res) => {
    const updateUsers = users.map(i => i.id === +req.params.id ? req.body : i);
    users.splice(0, users.length, ...updateUsers);
    res.send(req.body);
});


// 4) PATCH /user/:id
// (изменяет поле пользователя по id. Возвращает обновленного пользователя)
// { "age": 123123123 }
app.patch('/user/:id', (req, res) => {
    const updateUsers = users.map(i => i.id == req.params.id ? {...i, age: req.body.age} : i);
    users.splice(0, users.length, ...updateUsers);
    res.send(users[+req.params.id])
});


// 5) DELETE /user/:id
// ( удаляет пользователя по id. Возвращает boolean)
app.delete('/user/:id', (req, res) => {
    const index = users.findIndex(i => i.id === +req.params.id);
    users.splice(index, 1);
    index ? res.send(true) : res.send(false);
});


// 6) GET /users/:gender (M || F)
// ( возвращает всех мужчин или женщин )

app.get('/users/:gender', (req, res) => {
    const genderUsers = users.filter(i => {
        if( req.params.gender === 'M' ) {
            return i.isMan
        } else if( req.params.gender === 'F' ) {
            return i.isWoman
        }
    });
    res.send(genderUsers);
});


// 7) GET /filtredUsers?min=18&max=50
// ( возвращает всех пользователей чей возраст попадает в диапaзон)
app.get('/filtredUsers', (req, res) => {
    const filterUsers = users.filter(i => i.age >= req.query.min && i.age <= req.query.max);
    res.send(filterUsers);
});