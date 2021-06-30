const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes.js');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);



app.listen(port, () => console.log(`Listening at port ${port}`));