const fs = require('fs');
const sharp = require('sharp');
const processPost = require('./instaPost');

const processMessage = async (data) => {
    if (data.hasMedia) {
        const image = await data.downloadMedia();
        const fileContent = new Buffer.from(image.data, 'base64');
        fs.writeFile('newImage.jpg', fileContent, err => {
            if (err) return console.log('file did not saved');
            console.log('file is save bro.');
            sharp('newImage.jpg').resize(1696, 1064).toFile('resizedImage.jpg', (err, info) => {
                if (err) return console.log('file did not resized');
                console.log('file is resized');
                processPost('resizedImage.jpg');
            });
        })
    }
}
module.exports = processMessage;