const express = require('express');
const router = express.Router();
const data = require("./administrator");

router.get('/', (req, res) => {
    res.render('library', { title: "Biblioteca", books: data.books })
    console.log(data.books);

});

module.exports = router;