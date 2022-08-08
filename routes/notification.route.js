const notificationController = require('../controllers/notification.controller')
const validateBody = require('../middlewares/verifyRequestBody')

module.exports = (app)=>{
    app.post("/notiserv/api/v2/notifications", [validateBody.validateNotificationRequestBody], notificationController.acceptNotificationRequest)
    app.get("/notiserv/api/v2/notifications/:id", [validateBody.validateDetailsRequestBody], notificationController.getNotificaionDetails)
}