const fs = require('fs');

class MessageServices {
    getMessages() {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                res(JSON.parse(data));
            })
        })
    };

    getMessageById(id) {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);
                
                let parseData = JSON.parse(data);

                res(parseData[id]);
            })
        })
    };

    createMessage(body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                // next index ↓
                for(let key in parseData) {
                    let ind = +key+1;
                    if(ind === undefined) {
                        parseData[ind+1] = body
                    }
                }

                let index = +Object.keys(parseData).at(-1)+1;
                parseData[index] = body;

                // parseData[body.id] = body;
                fs.writeFile('./data/messagesData.json', JSON.stringify(parseData), (err) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);

                    res(body);
                })
            })
        })
    };

    editMessage(id, body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                parseData[id] = body

                fs.writeFile('./data/messagesData.json', JSON.stringify(parseData), (err) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);

                    res(body);
                })
            })
        })
    };

    deleteMessage(id) {
        return new Promise((res, rej) => {
            fs.readFile('./data/messagesData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                let index = Object.entries(parseData).findIndex(i => i[0] == id);

                if(index !== -1) {
                    delete parseData[index]; // index starts with 0
                } else {

                    res(false);
                }

                fs.writeFile('./data/messagesData.json', JSON.stringify(parseData), (err) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);
                    
                    res(true);
                })
            })
        })
    };
}

module.exports = new MessageServices();