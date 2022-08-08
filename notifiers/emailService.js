require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port : process.env.MAIL_PORT,
    service : process.env.MAIL_SERVICE,
    auth : {
        user: process.env.MAIL_ID,
        pass : process.env.MAIL_PASSWORD
    },
    secure : true
})