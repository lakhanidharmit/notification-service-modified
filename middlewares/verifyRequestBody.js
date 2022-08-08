exports.validateNotificationRequestBody = (req, res, next)=>{
    if (!req.body.subject) {
        return res.status(400).send({
            message: "Failed ! Notification subject is not provided"
        });
    }
    if (!req.body.recepientEmails) {
        return res.status(400).send({
            message: "Failed ! Recepient email is not provided"
        });
    }
    if (!req.body.content) {
        return res.status(400).send({
            message: "Failed ! Notification content is not provided"
        });
    }
    if (!req.body.requester) {
        return res.status(400).send({
            message: "Failed ! Notification requester is not provided"
        });
    }

    next();
}

exports.validateDetailsRequestBody = (req,res,next)=>{
    if (!req.params.id) {
        return res.status(400).send({
            message: "Failed ! trackingId is not provided"
        });
    }
}