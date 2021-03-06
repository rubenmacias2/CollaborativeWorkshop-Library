const express = require('express');
const router = express.Router();
const data = require("./administrator");



router.post('/search', (req, res) => {

    res.redirect('/');

});

router.get('/', (req, res) => {
    res.render('library', { title: "Biblioteca", books: data.books })
    console.log((data.users));
    //aqui se puede hacer la busqueda
    //console.log(data.buscar(1));

});



module.exports = router;