const Notification = require('../models/notification.model')


exports.acceptNotificationRequest = async (req,res)=>{
    try{
        const notificationObj = {
            subject : req.body.subject,
            recepientEmails: req.body.recepientEmails,
            content : req.body.content,
            requester : req.body.requester,
        };
    
        const notification = await Notification.create(notificationObj);
        console.log(`#### New notification request created. Id: ${notification._id} ####`);
    
        res.status(201).send({
            message : "Request accepted",
            trackingId : notification._id
        });
    }catch(err){
        console.log("#### Error while creating notification request ####", err.message);
        res.status(500).send({
            message : "Internal server error while creating notification request"
        })
    }
}

exports.getNotificaionDetails = async (req,res)=>{
    try{
        const trackingId = req.params.id;
        const notification = await Notification.findOne({_id : trackingId});
    
        res.status(200).send(notification);
    
    }catch(err){
        console.log("#### Error while retrieving details for notification request #### ", err.message);
        res.status(500).send({
            message : "Internal server error while fetching request data"
        })
    }
}