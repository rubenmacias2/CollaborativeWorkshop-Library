const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('administrator', { title: "Administrator biblioteca" })
})
module.exports = router;