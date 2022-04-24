const Instagram = require('instagram-web-api');
const FileCookieStore = require('tough-cookie-filestore2');

const cookieStore = new FileCookieStore('./cookies.json');
const client = new Instagram({ username: process.env.INSTA_USER, password: process.env.INSTA_PASS, cookieStore });

const processPost = async (location) => {
    try {
        await client.login();
        const caption = `
        😍New Collection 😍
        ✨ Inbox us to order with your details. 
        1.Your Name 
        2.Product Picture 
        3.Full Address 
        4.Contact Number 
        💌Inbox for price and more details💌
        `;
        const { media } = await client.uploadPhoto({ photo: location, caption });
        console.log(`[+] https://www.instagram.com/p/${media.code}/`);
    }
    catch (err) {
        console.error(`[+] ${err}`);
    }
}
module.exports = processPost;

