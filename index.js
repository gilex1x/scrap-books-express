const express = require('express');
const app = express();
const server = require('http').createServer(app);
const routerApi = require('./src/services/router');
const port = 8080;

//middlewares
app.use(express.json())

//Router
routerApi(app)
//Init server
server.listen(port, () => {
    console.log('server runing')
})

