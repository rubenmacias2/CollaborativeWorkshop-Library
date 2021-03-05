const express = require('express');
const { route } = require('./library');
const router = express.Router();

const users = []

router.get('/add-user', (req, res) => {
    res.render('admin', { title: 'Biblioteca' })
})

router.post('/add-user', (req, res) => {
    users.push({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        correo: req.body.correo,
        celular: req.body.celular,
    })
    console.log(users)
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('admin', { title: "Biblioteca" })
});

module.exports.books = books;
module.exports = router;