const { resolveInclude } = require('ejs');
const express = require('express');
const { route } = require('./library');
const data = require('./user');
const users = [
    {
        nombres: "Jorge",
        apellidos: "Acevedo",
        documento: "0",
        correo: "NoI",
        celular: "300",
        books: []
    }
];

const router = express.Router();
const books = [{
    isbn: "1",
    title: "SinTitulo",
    author: "Anónimo",
    editorial: "Editorial",
    date: "No hay",
    value: 10000,
    quantity: 3
}];
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
                //console.log(users)
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
router.post('/devolver-prestamo',(req,res)=>{
    var user = buscarUsuario(req.body.documento);
    var isbn = req.body.isbn;
    if (user != null) {
        if(user.books.length > 0){
            var book = buscarLibro(isbn);
            for(i = 0;i<user.books.length;i++){
                if(book.isbn == user.books[i].isbn){
                    book.quantity = book.quantity +1;
                    user.books.splice(i,1);
                    console.log("=====================")
                    console.log(user.books.length);
                    res.redirect('/')
                }
            }
        }else{
            console.log("No tiene ningún libro en préstamo");
            res.redirect('/')
        }
    }else {
        console.log("No se encontró el usuario");
        res.redirect('/')
    }
    /*if (user != null) {
        if (book != null) {
            book.quantity = book.quantity + 1;
            librosUser = user.books;
            console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII "+librosUser.length);
            //console.log(librosUser.indexOf(book));
            //librosUser.splice(x,1);
            //console.log(users)
            res.redirect('/')
        } else {
            console.log("No se encontró el libro");
        }
    } else {
        console.log("No se encontró el usuario");
    }*/
})


function buscarUsuario(documento) {
    for (i = 0; i < users.length; i++) {
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
        res.json(
            {
                msg: "Se ha guardado exitosamente",
            }
        )
        res.redirect('/admin')
        //console.log(booksUser)
    }else{
        console.log(documento);
    }
})

module.exports.buscar = buscarLibro;
module.exports.booksUser = booksUser;
module.exports.users = users;
module.exports.books = books;
module.exports = router;