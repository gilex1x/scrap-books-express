const { randomUUID } = require('crypto');
const puppeteer = require('puppeteer');
const AmazonScrap = require('./Scrapper/Amazon');
const BuscaLibreScrapp = require('./Scrapper/BuscaLibre');

const routerApi = async (app) => {
    require("events").EventEmitter.defaultMaxListeners = 100; // Warning
    const userSession = [];
    let browser;
    let page;

    await app.get('/', async (req, res) => {
        const randomId = randomUUID();
        browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: ['--no-sandbox'],
            slowMo: 100,
        })
        page = await browser.newPage();
        console.log('router working');
        res.status(200).send({});
    });

    await app.post('/search', async (req, res) => {
        //del front enviar una variable text
        const body = req.body
        const { text } = body;
        await AmazonScrap(page, text);
        await BuscaLibreScrapp(page, text); 
        console.log(text);
        res.status(200).send({});
    })
}

module.exports = routerApi;