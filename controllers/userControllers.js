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
    
    async createUser(body) {

        const createdUser = await UserService.createUser(body);
        return createdUser;

        // users.push(body);

    };

    async editUser(id, body) {

        const editUser = await UserService.editUser(id, body);
        return editUser;

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