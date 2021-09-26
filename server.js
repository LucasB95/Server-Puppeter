const express = require('express');
const path = require('path')

const app = express();
const fs= require('fs');

app.set('view engine', 'ejs');

var busqLocal1 = "";
let rawdata = fs.readFileSync('scripts/comida.json');
let student = JSON.parse(rawdata);

//routes
app.use(require('./routes/index'));


app.get('/api/search/:q', (req,res) => {
    process.env.busqLocal = req.params.q;
    busqLocal1 =  process.env.busqLocal;
  

    console.log(path.join(__dirname,'index.js'))

    console.log("haber eso "+    process.env.busqLocal)
    console.log("busqueda: ", req.params.q);

    //res.send(req.params.q)
    rawdata = fs.readFileSync('scripts/comida.json');
    student = JSON.parse(rawdata);
    res.send(student)

    res.end();
  
})

var busq = busqLocal1;
console.log(busq);
module.exports=busq;

app.get('/resultados',(req,res) => {
    res.send(student)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
})
 

