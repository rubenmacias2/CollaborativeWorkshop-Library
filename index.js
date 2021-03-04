const express = require('express');
const app = express();
const port = 3500;
const path = require('path');

const indexRouter = require('./routes/administrator');
const shop = require('./routes/library');
//PRUEBA

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/admin', indexRouter);
app.use('/', shop);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server Listen ${port}`));