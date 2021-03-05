const express = require('express');
const { route } = require('./library');
const router = express.Router();

const books = []

router.get('/add-book', (req, res) => {
    res.render('admin', { title: 'Biblioteca' })
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

    console.log(books)
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('admin', { title: "Biblioteca" })
});

function buscarLibro(isbn){
    for(i = 0;i<books.length;i++){
        if(books[i].isbn == isbn || books[i].title == isbn){
            return books[i];
        }
    }
    return null;
}

///module.exports.books = books;
module.exports = {
    books: books,
    buscarLibro: buscarLibro,
    
}
module.exports = router;