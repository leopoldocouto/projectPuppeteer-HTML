function searchSite2(browser) {
    return new Promise(async(resolve, reject) => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('https://www.bbc.com/portuguese/brasil', { waitUntil: 'networkidle0' });

        await page.waitForSelector("#comp-index-title")
        const msg = await page.evaluate(() => document.querySelector("#comp-index-title").innerHTML)
        await page.close()
        
        resolve(msg)        
    })
}


module.exports = searchSite2