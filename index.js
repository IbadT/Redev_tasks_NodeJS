require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const routes = require('./routes/index');
// на этот роут - отдай мне модуль routes 
app.use('/api', routes);

app.listen(parseInt(process.env.PORT), () => console.log('Server is started...'));