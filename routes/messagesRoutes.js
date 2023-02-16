const express = require('express');
const router = express.Router();
const MessageControllers = require('../controllers/messageControllers.js');


router.get('/messages', (req, res) => {
    try {
        const messages = MessageControllers.getMessages();
        res.send(messages);
    } catch (error) {
        console.log(error);
    }
})

router.get('/messageById/:id', (req, res) => {
    try {
        const message = MessageControllers.getMessageById(req.params.id);
        res.send(message);   
    } catch (error) {
        console.log(error);
    }
});

router.post('/create', (req, res) => {
    try {
        MessageControllers.createMessage(req.body);
        res
            .status(201)
            .send(req.body);
    } catch (error) {
        console.log(error);
    }
    // messages = {...messages, 4: req.body}; //////////////
});

// {
//     "id": 123,
//     "text": "<<<SDFSDFSdfasSDfaDSFSDF>>>"
// }

// {
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
//     },
//     "body": {
//         "id": 123,
//         "text": "<<<SDFSDFSdfasSDfaDSFSDF>>>"
//     }
// }




router.put('/edit/:id', (req, res) => {
    try {
        MessageControllers.editMessage(req.params.id, req.body);
        res.send(req.body);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id', (req, res) => {
    try {
        const bool = MessageControllers.deleteMessage(req.params.id);
        res.send(bool);    
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;