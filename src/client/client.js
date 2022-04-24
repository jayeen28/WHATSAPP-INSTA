const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client(
    {
        authStrategy: new LocalAuth({ dataPath: './' })
    }
);

module.exports = client;