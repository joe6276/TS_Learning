const puppeteer = require('puppeteer')

test('Should add List Element', async()=>{

    const browser=await puppeteer.launch({
        headless:false,
        slowMo:80
    })

    const page= await browser.newPage()
    await page.goto("http://127.0.0.1:5500/index.html")

    await page.click('#username')
    await page.type('#username', "John")

    await page.click('#password')
    await page.type('#password', "1234")

    await page.click('#signup')

    const result = await page.$eval('li', li=>li.textContent)

    expect(result).toBe("John  --- 1234")

},15000)