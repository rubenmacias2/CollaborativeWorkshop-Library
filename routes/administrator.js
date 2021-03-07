const express = require('express');
const { route } = require('./library');
const data = require('./user');
const users = [];

const router = express.Router();
const books = [];
var booksUser = [];

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

router.post('/add-prestamo', (req, res) => {
    var user = buscarUsuario(req.body.documento);
    var isbn = req.body.isbn;
    var book = buscarLibro(isbn);
    if (user != null) {
        if (book != null) {
            if(book.quantity >= 1){
                book.quantity = book.quantity - 1;
                var librosUser = user.books;
                var fecha = new Date();
                librosUser.push({
                    documentoUser: req.body.documento,
                    isbn: req.body.isbn,
                    fecha: fecha,
                })
                console.log(users)
                res.redirect('/')
            }else{
                console.log("Todos los libros de ese tipo han sido prestados");
            }
        } else {
            console.log("No se encontró el libro");
        }
    } else {
        console.log("No se encontró el usuario");
    }
})

function buscarUsuario(documento) {
    for (i = 0; i < users.length; i++) {
        console.log(users[i].documento);
        console.log(documento);
        if (users[i].documento == documento) {
            return users[i];
        }
    }
    return null;
}

router.get('/', (req, res) => {
    res.render('admin', { title: "Biblioteca", books: books, users: users , booksUser: booksUser})
});


function buscarLibro(n1) {
    for (i = 0; i < books.length; i++) {
        if (books[i].isbn == n1) {
            return books[i];
        }
    }
    return null;
}

router.post("/books-user", (req,res) => {
    var documento = req.body.documento;
    var user = buscarUsuario(documento);
    if(user != null){
        booksUser = user.books;
        res.redirect('/admin')
        console.log(booksUser)
    }else{
        console.log(documento);
    }
})

module.exports.buscar = buscarLibro;
module.exports.booksUser = booksUser;
module.exports.users = users;
module.exports.books = books;
module.exports = router;