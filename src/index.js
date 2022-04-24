const { Client, LocalAuth } = require('whatsapp-web.js');
const qrCode = require('qrcode-terminal');

const client = new Client(
    {
        authStrategy: new LocalAuth({ dataPath: './' }),
        puppeteer: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    }
);

client.on('qr', qr => {
    qrCode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('client is ready');
});

client.on('message', msg => {
    console.log(msg);
    // client.sendMessage(msg.from, 'Hello I am Mad Falcon[bot]. How can I help you?');
});

client.initialize();