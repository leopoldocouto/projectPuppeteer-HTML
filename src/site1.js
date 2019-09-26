function searchSite1(browser) {
    return new Promise(async(resolve, reject) => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('https://bbc.com', { waitUntil: 'networkidle0' });

        await page.waitForSelector("#page > section.module.module--header > h2 > span")
        const msg = await page.evaluate(() => document.querySelector("#page > section.module.module--header > h2 > span").outerHTML)
        await page.close()
        
        resolve(msg)        
    })
}

module.exports = searchSite1