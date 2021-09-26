const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index');
})

router.get('/api',(req,res) => {
    //console.log("prueba")
    res.send("prueba")
})

module.exports = router;