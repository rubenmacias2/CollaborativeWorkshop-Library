const express = require('express');
const app = express();
const port = 3500;
const path = require('path');

const indexRouter = require('./routes/administrator.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(port, () => console.log(`Server Listen ${port}`));