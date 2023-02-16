const fs = require('fs');

class MessageServices {
    getMessages() {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                if(err) throw err;
                res(data);
            })
        })
    };
}

module.exports = new MessageServices();