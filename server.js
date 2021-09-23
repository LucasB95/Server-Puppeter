const express = require('express');

const app = express();
const fs= require('fs');

// app.get('/hacker' , (req,res) => {
//     res.send('ahre');
// })
var busq;
module.exports=busq;
let rawdata = fs.readFileSync('scripts/comida.json');
let student = JSON.parse(rawdata);

app.get('/api/search/:q' , (req,res) => {
    console.log("busqueda: ", req.params ['q']);
    res.send(student)
})

//  app.get('api/search' ,(req,res) => {
//     const  busqueda = "hola";
//      //res.json({busqueda})
//     console.log("busqueda :" );
//     res.send(student);
//  })


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
})
 


