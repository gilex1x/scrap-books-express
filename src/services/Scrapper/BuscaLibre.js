const BuscaLibreScrapp = async (page, text) => {
    let items = [];
    await page.waitForSelector('#buscador > form > div.ui-widget.buscandoen-libros.buscandoen-libros-cyber > input[type=search]');
    await page.click('#buscador > form > div.ui-widget.buscandoen-libros.buscandoen-libros-cyber > input[type=search]');
    await page.keyboard.type(text);
    await page.keyboard.press('Enter');
    await page.waitForSelector('#content > div.productos.pais46');
    await page.$$('div.box-producto', (item) => {
        items.push(item);
    });

    return { items: items }
}

module.exports = BuscaLibreScrapp