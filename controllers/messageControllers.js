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
//     "1": {
//         "id": 1,
//         "text": 'first text'
//     },
//     "2": {
//         "id": 2,
//         "text": 'second text'
//     },
//     "3": {
//         "id": 3,
//         "text": 'third text'
//     }
// }




class MessageControllers {
    getMessages() {
        return messages;
    };

    getMessageById(id) {
        return messages[id];
    };

    createMessage(body) {/////////// { ...: text}
        messages = {...messages, body};
    };

    editMessage(id, body) {   
        for(let key in messages) {
            if(id == key) {
                messages[key] = body;
            }
        }
    };

    deleteMessage(id) {
        const index = Object.keys(messages).findIndex(i => i == id);
        if(index !== -1) {
            // delete messages[index+1];
            Reflect.deleteProperty(people, index+1);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = new MessageControllers();