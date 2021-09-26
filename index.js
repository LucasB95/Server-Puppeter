const express = require('express');
const puppeteer = require('puppeteer');

const path = require('path');
const websites = require('./websites.json');
const busq = require('./server');

    (async () => {
        const browser = await puppeteer.launch({
            // headless:false,
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        const buscador = await busq;
        var contador = 1;


        for(let i=1 ; i<= 10;i++){
           // while(contador == 1){

                for(const website of websites){
                    const scriptPath = path.join(__dirname,'scripts',website.scriptName);
                   await require(scriptPath)(page,website,buscador);
                    console.log('Scrapping done for',website.name);
                }
            // }
     }
    
    //await browser.close();
    //headless:false
    
    })();



