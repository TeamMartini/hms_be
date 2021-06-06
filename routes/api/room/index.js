const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./room.controller');

router.use('/createRoom', authMiddleware);
router.post('/createRoom', controller.createRoom);
router.get('/getRoomInfo', controller.getRoomInfo);
router.get('/listRooms', controller.listRooms);

module.exports = router;
