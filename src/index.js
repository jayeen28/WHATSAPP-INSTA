const client = require('./client/client.js');
require('dotenv').config();
const qrCode = require('qrcode-terminal');
const processMessage = require('./functions/processMessage');


client.on('qr', qr => {
    qrCode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('client is ready');
});

client.on('message', msg => {
    if (process.env.TARGET_ID === msg.from) processMessage(msg);
});

client.initialize();