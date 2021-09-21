const fs = require('fs');
const path = require('path');
module.exports = async (page,website) => {

    const {selectors} = website;
    var q = "calabaza"

await page.goto(website.url);
await page.waitForSelector('body > header > div > div > div > form > input.search-field')
await page.type('body > header > div > div > div > form > input.search-field',`${q}`);
await page.waitForSelector(selectors.buscador);
await page.click(selectors.buscador);

await page.waitForSelector(selectors.Image);
const image = await page.evaluate( (Image) => {
    const FindImage = document.querySelectorAll(Image);  
    const FindArray = Array.from(FindImage).map((elem) => elem.src);  
    console.log(FindArray); 

    const ListImg =  []
    console.log(FindImage);
     for ( const list of FindArray ){
     ListImg.push(list);
     }
     console.log(ListImg);
     return ListImg;
    },selectors.Image)

//console.log(image);

await page.waitForSelector(selectors.ListTag);
const Titulo = await page.evaluate( (ListTag) => {
const FindList = document.querySelectorAll(ListTag);
const ListText =  []
//console.log(FindList);
for ( const list of FindList ){
    ListText.push(list.innerText);
}
return ListText;
},selectors.ListTag);

const regExp = new RegExp('[A-z]+');
const Food = [];
for (const text of Titulo) {
 const textSplited = text.split('\n').filter(txt=> regExp.test(txt));
 const newFood = {
     Nombre: textSplited[0],
     Descripcion1: textSplited[1],
     Descripcion2 : textSplited[2]
 }
 Food.push(newFood);
}

//console.log(Food);

const Imagenes = [];
for (const img of image) {
    const nombreImg = {
        Imagen : img
     }   
    Imagenes.push(nombreImg);
}

const comida = [];
 Food.forEach((com,index) =>{

    const imag = Imagenes[index];
    const comi = {
        Texto : com,
        Imagenes: imag
    }
    // console.log(com,imag);
comida.push(comi);
})

//console.log(comida);

// await page.screenshot({path:path.join(__dirname,`${website.scriptName}.png`)});
fs.writeFileSync(path.join(__dirname,`${website.scriptName}.json`),JSON.stringify(Food),'utf8');
fs.writeFileSync(path.join(__dirname,`Imagenes.json`),JSON.stringify(Imagenes),'utf8');
fs.writeFileSync(path.join(__dirname,`comida.json`),JSON.stringify(comida),'utf8');

};