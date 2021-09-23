const express = require('express');
const path = require('path')

const app = express();
const fs= require('fs');

var busq = "calabaza";
console.log(busq);
module.exports=busq;
let rawdata = fs.readFileSync('scripts/comida.json');
let student = JSON.parse(rawdata);

app.get('/api/search/:q' , (req,res) => {
    busq = req.params['q'];
    res.sendFile(__dirname + 'index.js')
    console.log("busqueda: ", req.params ['q']);

    res.send(student)
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
})
 


