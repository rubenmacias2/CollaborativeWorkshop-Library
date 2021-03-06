const express = require('express');
const { route } = require('./library');
const data = require('./user');
const users = [];

const router = express.Router();
const books = [];

router.get('/add-book', (req, res) => {
    res.render('admin', { title: 'Biblioteca' })
})

router.post('/add-user', (req, res) => {
    users.push({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        correo: req.body.correo,
        celular: req.body.celular,
        books: []
    })

    res.redirect('/admin');
})

router.post('/add-book', (req, res) => {
    books.push({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        editorial: req.body.editorial,
        date: req.body.date,
        date: req.body.date,
        value: req.body.value,
        quantity: req.body.quantity
    })


    res.redirect('/admin')
})

router.get('/', (req, res) => {
    res.render('admin', { title: "Biblioteca", books: books, users: users })
    console.log();
});


function buscarLibro(n1) {
    for (i = 0; i < books.length; i++) {
        if (books[i].isbn == n1) {
            return books[i];
        }
    }
    return null;
}
module.exports.buscar = buscarLibro;
module.exports.users = users;
module.exports.books = books;
module.exports = router;