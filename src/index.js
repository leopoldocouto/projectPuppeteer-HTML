const puppeteer = require('puppeteer');

const site1 = require('./site1');
const site2 = require('./site2');
const selecs = {
    name: [],
    checked: []
}

(async () => {
    const browser = await puppeteer.launch({ headless: !true });

    site1(browser)
        .then(msg => console.log(msg))
    site2(browser)
        .then(msg => console.log(msg))
    //await browser.close()
})(); 

/* document.querySelector('#btnResult').onclick = function (event) {
    event.preventDefault()
    document.querySelectorAll('input').forEach((selec, id, array) => {
        selecs.name[id] = selec.value
        selecs.checked[id] = selec.checked
    }) 
    console.log(selecs)
} */

