const UserService = require('../services/userServices.js');


class UserControllers {
    async getUsers() {
        let users = await UserService.getUsers();
        return users;
    };

    async getUserForGender(gender) {
        const genderUser = await UserService.getUserForGender(gender);
        return genderUser;
    
        // const genderUsers = users.filter(i => gender === 'M' ? i.isMan: !i.isMan)
        // // const genderUsers = users.filter(i => gender === 'M' );
        // return genderUsers;
    };

    async getFiltredUsers(min, max) {
        const filterUsers = await UserService.getFilterUsers(min, max);
        return filterUsers; 

        // const filterUsers = users.filter(i => i.age >= min && i.age <= max);
        // return filterUsers;
    };
    
    createUser(body) {
        UserService.createUser(body);

        // users.push(body);
    };

    editUser(id, body) {
        UserService.editUser(id, body);

        // const updateUsers = users.map(i => i.id === +id ? body : i);
        // users.splice(0, users.length, ...updateUsers);
    };

    async patchUser(id, age) {
        const user = await UserService.editUserParam(id, age);
        return user;

        // const updateUsers = users.map(i => i.id == id ? {...i, age: age} : i);
        // users.splice(0, users.length, ...updateUsers);
    };

    async deleteUser(id) {
        const bool = await UserService.deleteUser(id);
        console.log(bool);
        return bool;

        // const index = users.findIndex(i => i.id == id);
        // if(index !== -1){
        //     users.splice(index, 1);
        //     return true;
        // } else {
        //     return false;
        // }
    }
}

module.exports = new UserControllers();