const AmazonScrap = async (page, text) => {
    await page.goto('https://www.amazon.com/-/es/Libros/b?ie=UTF8&node=283155');
    await page.waitForSelector('#twotabsearchtextbox');
    await page.click('#twotabsearchtextbox');
    await page.keyboard.type(text);
    await page.keyboard.press('Enter');
}

module.exports = AmazonScrap;