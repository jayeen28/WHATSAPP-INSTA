const fs = require('fs');
const processPost = require('./instaPost');

const processMessage = async (data) => {
    if (data.hasMedia) {
        const image = await data.downloadMedia();
        const fileContent = new Buffer.from(image.data, 'base64');
        fs.writeFile('newImage.jpg', fileContent, err => {
            if (err) return console.log('file did not saved');
            console.log('file is save bro.');
            processPost();
        })
    }
}
module.exports = processMessage;