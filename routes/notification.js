const express = require('express');
const NotificationController = require('../controllers/Notification-controller');
const router = express.Router();

router.get('/', NotificationController.getNotifications)
router.post('/', NotificationController.addNotification)
router.delete('/:id', NotificationController.deleteNotification)
router.patch('/topicnotifications/:id', NotificationController.deletenotifications)
router.patch('/markasread/:id', NotificationController.markReadNotification)
router.delete('/', NotificationController.clearNotifications)



module.exports = router;