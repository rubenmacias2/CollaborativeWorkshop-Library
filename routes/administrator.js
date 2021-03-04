const express = require('express');
const router = express.Router();

const books = []

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
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('admin', { title: "Biblioteca" })
})

module.exports = router;