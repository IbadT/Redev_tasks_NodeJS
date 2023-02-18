const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers.js')




// 1) GET /users
// (возвращает массив всех пользователей)
router.get('/', async (req, res) => {
    try {
        const users = await UserControllers.getUsers();
        res.send(users);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 2) POST /user
// (добавляет нового пользователя в массив. Возвращает нового пользователя)
// { "id": 6, "name": "Natasha", "isMan": false, "age": 22222 }
router.post('/user', async (req, res) => {
    try {
        const createdUser = await UserControllers.createUser(req.body);
        res
            .send(createdUser)
            .status(201);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 3) PUT /user/:id
// (изменяет пользователя по id. Возвращает обновленного пользователя)
// { "id": 1, "name": "TEST_Pasha_TEST", "isMan": false, "age": 23 }
router.put('/user/:id', async (req, res) => {
    try {
        const editUser = await UserControllers.editUser(req.params.id, req.body);
        res.send(editUser);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 4) PATCH /user/:id
// (изменяет поле пользователя по id. Возвращает обновленного пользователя)
// { "age": 123123123 }
router.patch('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserControllers.patchUser(id, req.body.age);
        res.send(user);


        // const { id } = req.params;
        // UserControllers.patchUser(id, req.body.age);
        // res.send(users[id])
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 5) DELETE /user/:id
// ( удаляет пользователя по id. Возвращает boolean)
router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const bool = await UserControllers.deleteUser(req.params.id);
        res.send(bool);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 6) GET /users/:gender (M || F)
// ( возвращает всех мужчин или женщин )
router.get('/users/:gender', async (req, res) => {
    try {
        const { gender } = req.params;
        const genderUser = await UserControllers.getUserForGender(gender);
        res.send(genderUser);

        // const { gender } = req.params;
        // const genderUsers = UserControllers.getUserForGender(gender);
        // res.send(genderUsers);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});


// 7) GET /filtredUsers?min=18&max=50
// ( возвращает всех пользователей чей возраст попадает в диапaзон)
router.get('/filtredUsers', async (req, res) => {
    try {
        const { min, max } = req.query;
        const filterUsers = await UserControllers.getFiltredUsers(min, max);
        res.send(filterUsers);

        // const { min, max } = req.query;
        // const filterUsers = UserControllers.getFiltredUsers(min, max);
        // res.send(filterUsers);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }

});

module.exports = router;
















// const fs = require('fs');
// router.get('/read', (req, res) => {
//     console.log('read'); 
//     fs.readFile('data.json', "utf8", (err, data) => {
//         console.log('асинхронное чтение файла'); 
//         if(err) throw err;
//         console.log(typeof data); // string

//         const obj = JSON.parse(data);
//         console.log(obj);
//         console.log(typeof obj); // object

//         res.send(obj);
//     })
// })

// router.post('/write', (req, res) => {
//     console.log('write');

//     let data = fs.readFileSync('data.json', 'utf8');
//     console.log(data);

//     const obj = JSON.parse(data);
//     console.log(obj);

//     obj.push(req.body);
//     console.log(obj);

//     fs.writeFile('data.json', JSON.stringify(obj, null, 3), (err) => {
//         if(err) throw err;
//         console.log('завершено');
//     })

//     res.send(obj);
// })
