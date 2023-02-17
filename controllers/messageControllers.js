// let messages = {
//     1: {
//         id: 1,
//         text: 'first text'
//     },
//     2: {
//         id: 2,
//         text: 'second text'
//     },
//     3: {
//         id: 3,
//         text: 'third text'
//     }
// }


// {
//     "0": {
//         "id": 0,
//         "text": "start text"
//     },
//     "1": {
//         "id": 1,
//         "text": "first text"
//     },
//     "2": {
//         "id": 2,
//         "text": "second text"
//     },
//     "3": {
//         "id": 3,
//         "text": "third text"
//     }
// }






const MessageServices = require('../services/messageServices.js');

class MessageControllers {
    
    async getMessages() {

        const messages = await MessageServices.getMessages();
        return messages;

    };

    async getMessageById(id) {

        const message = await MessageServices.getMessageById(id);
        return message;

        // return messages[id];

    };

    async createMessage(body) {

        let createdMessage = await MessageServices.createMessage(body);
        return createdMessage;

    };

    async editMessage(id, body) {  

        let editMessage = await MessageServices.editMessage(id, body);
        return editMessage;

        // for(let key in messages) {
        //     if(id == key) {
        //         messages[key] = body;
        //     }
        // }

    };

    async deleteMessage(id) {

        const bool = await MessageServices.deleteMessage(id);
        return bool;

        // const index = Object.keys(messages).findIndex(i => i == id);
        // if(index !== -1) {
        //     // delete messages[index+1];
        //     Reflect.deleteProperty(people, index+1);
        //     return true;
        // } else {
        //     return false;
        // }

    }
}

module.exports = new MessageControllers();