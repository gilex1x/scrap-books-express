const BuscaLibreScrapp = async (page, text) => {
    const items = []
    await page.waitForSelector('#buscador > form > div.ui-widget.buscandoen-libros.buscandoen-libros-cyber > input[type=search]');
    await page.click('#buscador > form > div.ui-widget.buscandoen-libros.buscandoen-libros-cyber > input[type=search]');
    await page.keyboard.type(text);
    await page.keyboard.press('Enter');
    await page.waitForSelector('#content > div.productos.pais46');
    await page.waitForSelector('.box-producto');
    let results = await page.evaluate(() => {
        return document.getElementsByClassName('box-producto')[0]();
    })
    console.log(results);

}

module.exports = BuscaLibreScrapp