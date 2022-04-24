const fs = require('fs');
const sharp = require('sharp');
const processPost = require('./instaPost');

const processMessage = async (data) => {
    if (data.hasMedia) {
        console.log('[+] Message received from whatsapp');
        const image = await data.downloadMedia();
        const fileContent = new Buffer.from(image.data, 'base64');
        fs.writeFile('newImage.jpg', fileContent, err => {
            if (err) return console.log('[+] Image did not saved');
            console.log('[+] Image saved');
            sharp('newImage.jpg').resize(1696, 1064).toFile('resizedImage.jpg', (err, info) => {
                if (err) return console.log('[+] Image did not resized');
                console.log('[+] Image resized');
                processPost('resizedImage.jpg');
            });
        })
    }
}
module.exports = processMessage;