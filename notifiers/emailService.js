require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port : process.env.EMAIL_PORT,
    service : process.env.EMAIL_SERVICE,
    auth : {
        user: process.env.EMAIL_ID,
        pass : process.env.EMAIL_PASSWORD
    },
    secure : true
})