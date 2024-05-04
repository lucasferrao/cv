const path = require('path');
const fs = require('fs').promises; // Usar promises diretamente para simplificação

exports.index = async (req, res) => {
    try {
        // Garantir que o caminho está correto, considerando que a pasta views está no mesmo nível que controllers
        const filePath = path.join(__dirname, '../views/index.html');
        const html = await fs.readFile(filePath, 'utf8');
        res.send(html); // Enviar o conteúdo HTML como resposta
    } catch (error) {
        // Em caso de erro na leitura do arquivo, envia uma resposta com status 500
        res.status(500).send('Erro ao carregar a página');
    }
};