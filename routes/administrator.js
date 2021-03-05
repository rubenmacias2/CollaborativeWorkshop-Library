const express = require('express');
const { route } = require('./library');
const router = express.Router();

const books = [];

router.get('/add-book', (req, res) => {
    res.render('admin', { books: books })
})

router.post('/add-book', (req, res) => {
    books.push({
        title: req.body.title,
        author: req.body.author,
        editorial: req.body.editorial,
        date: req.body.date,
        date: req.body.date,
        value: req.body.value,
        quantity: req.body.quantity
    })

    console.log(books)
    res.redirect('/admin')
})

router.get('/', (req, res) => {
    res.render('admin', { title: "Administrador Biblioteca", books: books })
});

module.exports.books = books;
module.exports = router;