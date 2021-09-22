const express = require('express');
const app = express();

app.get('/hacker' , (req,res) => {
    res.send('ahre');
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
})