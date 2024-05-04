//Routes main variables
const path = require('path');
const fs = require('fs').promises; //Use directly promises to simplify

//Get method to send home's content
exports.index = async (req, res) => {
    try {
        //Path
        const filePath = path.join(__dirname, '../views/index.html');
        const html = await fs.readFile(filePath, 'utf8');
        res.send(html); //Send html file
    } catch (error) {
        //Exception. In case of error, send status 500
        res.status(500).send('Erro ao carregar a página');
    }
};