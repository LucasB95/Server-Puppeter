const puppeteer = require('puppeteer');
const path = require('path');
const websites = require('./websites.json');
const busq = require('./server');

module.exports = (async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const buscador = await busq;

    for(const website of websites){
        const scriptPath = path.join(__dirname,'scripts',website.scriptName);
       await require(scriptPath)(page,website,buscador);
        console.log('Scrapping done for',website.name);
    }

//await browser.close();
//headless:false

})();

