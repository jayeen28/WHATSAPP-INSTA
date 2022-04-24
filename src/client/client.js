const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client(
    {
        authStrategy: new LocalAuth({ dataPath: './' }),
        puppeteer: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    }
);

module.exports = client;