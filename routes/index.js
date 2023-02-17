const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const peopleRoutes = require('./peopleRoutes');
const messagesRoutes = require('./messagesRoutes');


router.use('/users', userRoutes);
router.use('/people', peopleRoutes);
router.use('/messages', messagesRoutes);


module.exports = router;