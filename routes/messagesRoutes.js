const express = require('express');
const router = express.Router();
const MessageControllers = require('../controllers/messageControllers.js');


router.get('/messages', async (req, res) => {
    try {
        const messages = await MessageControllers.getMessages();
        res.send(messages);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
})

router.get('/messageById/:id', async (req, res) => {
    try {
        const message = await MessageControllers.getMessageById(req.params.id);
        res.send(message);   
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});

router.post('/create', async (req, res) => {
    try {
        let createdMessage = await MessageControllers.createMessage(req.body);
        res
            .status(201)
            .send(createdMessage);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        let editMessage = await MessageControllers.editMessage(req.params.id, req.body);
        res.send(editMessage);
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const bool = await MessageControllers.deleteMessage(req.params.id);
        res.send(bool);    
    } catch (error) {
        Sentry.captureException(error);
        // console.log(error);
    }
});

module.exports = router;