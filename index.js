const puppeteer = require('puppeteer');
const path = require('path');
const websites = require('./websites.json');


(async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();

    for(const website of websites){
        const scriptPath = path.join(__dirname,'scripts',website.scriptName);
       await require(scriptPath)(page,website);
        console.log('Scrapping done for',website.name);
    }

await browser.close();
//headless:false

})();

