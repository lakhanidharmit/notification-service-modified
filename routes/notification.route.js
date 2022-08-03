const notificationController = require('../controllers/notification.controller')


module.exports = (app)=>{
    app.post("/notiserv/api/v2/notifications", notificationController.acceptNotificationRequest)
    app.get("/notiserv/api/v2/notifications/:id", notificationController.getNotificaionDetails)
}