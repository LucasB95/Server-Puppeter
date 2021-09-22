const express = require('express');
const app = express();
const fs= require('fs');

// app.get('/hacker' , (req,res) => {
//     res.send('ahre');
// })

let rawdata = fs.readFileSync('scripts/comida.json');
let student = JSON.parse(rawdata);

app.get('/api' , (req,res) => {
    res.send(student)
})

//  app.get('/search' ,(req,res) => {

//  })


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
})