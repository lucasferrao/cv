const router = require('express').Router();
const homeController = require('../controllers/home.controller');
const bioController = require('../controllers/bio.controller');

router.get('/', homeController.index);
router.get('/biography', bioController.index);

module.exports = router;
























/** 
const express = require('express');
const app = express();
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');

/** 
//Home route
app.get('/', async (req, res) => {

    res.send(await readFile('views/index.html', 'utf8'));
});*/

// Configuração da pasta de arquivos estáticos
/**app.use(express.static('public'));  // Assumindo que sua pasta `public` contém `css`, `js`, etc.

app.get('/', async (req, res) => {
    try {
        const html = await readFile(path.join(__dirname, 'views', 'index.html'), 'utf8');
        res.send(html);
    } catch (error) {
        res.status(500).send('Erro ao ler o arquivo');
    }
});

//app.get('/biography/', controllerBio.read);

app.get('/biography', async (req, res) => {

    res.send(await readFile('views/bio.html', 'utf8'));
});

module.exports = app;
*/