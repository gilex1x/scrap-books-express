const BuscaLibreScrapp = async (page, text) => {
    await page.goto('https://www.buscalibre.com.co/libros/');
}

module.exports=BuscaLibreScrapp