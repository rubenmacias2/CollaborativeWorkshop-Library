const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('library', { title: "Biblioteca" })
});

module.exports = router;