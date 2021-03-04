const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3500;
const app = express();

const indexRouter = require('./routes/administrator.js');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => console.log(`Server Listen ${port}`));