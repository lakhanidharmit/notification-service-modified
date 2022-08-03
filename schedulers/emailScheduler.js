const cron = require('node-cron');
const Notification = require('../models/notification.model')
const constants = require('../utils/constants')
const emailTransporter = require('../notifiers/emailService')

cron.schedule("*/30 * * * * *", async ()=>{ //runs every 30 seconds
    const notifications = await Notification.find({status : constants.notificationStatus.unsent})

    if(notifications){
        console.log(`#### Number of un-sent notification request are: ${notifications.length} ####`);
        notifications.forEach(request =>{
            const mailObj = {
                to : request.recepientEmails,
                subject : request.subject,
                text : request.content
            }
            console.log(`#### Sending email for request id: ${request._id} ####`);
            emailTransporter.sendMail(mailObj, async (err,info)=>{
                if(err){
                    console.log("#### Error while sending email #### ", err.message);
                }else{
                    console.log("#### Successfully sent the email #### ", info);
                    request.status = constants.notificationStatus.sent;
                    await request.save();
                }
            })
        })
    }
});