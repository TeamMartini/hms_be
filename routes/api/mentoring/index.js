const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./mentoring.controller');

router.use('/reservation', authMiddleware);
router.post('/reservation', controller.reservation);
router.get('/getReservationInfo', controller.getReservationInfo);
router.get('/listReservation', controller.listReservation);

module.exports = router;
