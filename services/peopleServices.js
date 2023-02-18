const fs = require('fs');

class PeopleServices {
    getPeople() {
        return new Promise((res, rej) => {
            fs.readFile('./data/peopleData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                res(JSON.parse(data));
            })
        })
    };

    createPeople(body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/peopleData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                for(let key in parseData) {
                    let ind = +key+1;
                    if(ind === undefined) {
                        parseData[ind+1] = body
                    }
                }

                let index = +Object.keys(parseData).at(-1)+1;
                parseData[index] = body;

                fs.writeFile('./data/peopleData.json', JSON.stringify(parseData), (err) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);

                    res(body);
                })
            })
        })
    };

    editPeople(id, body) {
        return new Promise((res, rej) => {
            fs.readFile('./data/peopleData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                parseData[id] = body;

                fs.writeFile('./data/peopleData.json', JSON.stringify(parseData), (err) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);

                    res(body);
                })
            })
        })
    };

    deletePeople(id) {
        return new Promise((res, rej) => {
            fs.readFile('./data/peopleData.json', 'utf8', (err, data) => {
                // if(err) throw err;
                if(err) Sentry.captureException(err);

                let parseData = JSON.parse(data);
                let index = Object.entries(parseData).findIndex(i => i[0] == id);

                if(index !== -1) {
                    delete parseData[index+1]; // index starts with 1
                } else {
                    res(false);
                }

                fs.writeFile('./data/peopleData.json', JSON.stringify(parseData), (er) => {
                    // if(err) throw err;
                    if(err) Sentry.captureException(err);
                    
                    res(true);
                })
            })
        })
    }
}

module.exports = new PeopleServices();