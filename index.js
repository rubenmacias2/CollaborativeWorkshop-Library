const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3500;
const app = express();

const indexRouter = require('./routes/administrator.js');
const rutaUser = require('./routes/user.js');
const shop = require('./routes/library');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

//RUTAS
app.use('/admin', indexRouter);

app.use('/', shop);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Server Listen ${port}`));