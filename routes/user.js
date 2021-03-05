const express = require('express');
const buscarLibro = require('./administrator');
const router = express.Router();

const users = []

router.get('/add-user', (req, res) => {
    res.render('user', { title: 'USERS' })
})

router.post('/add-user', (req, res) => {
    console.log("AQUI")
    users.push({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        correo: req.body.correo,
        celular: req.body.celular,
        books: []
    })
    console.log(users)
    res.redirect('/')
})

router.post('/add-prestamo', (req, res) => {
    var user = buscarUsuario(req.body.documentoUser);
    var isbn = req.body.isbn;
    var book = buscarLibro(isbn);
    //console.log(book);
    if(user != null){
        if(book != null){
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
            console.log("No se encontró el libro");
        }
    }else{
        console.log("No se encontró el usuario");
    }
})

function buscarUsuario(documento){
    for(i = 0;i<users.length;i++){
        if(users[i].documento == documento){
            return user[i];
        }
    }
    return null;
}

router.get('/', (req, res) => {
    res.render('user', { title: "USERS" })
});

module.exports.users = users;
module.exports = router;