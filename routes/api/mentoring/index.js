const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./mentoring.controller');

router.use('/reservation', authMiddleware);
router.post('/reservation', controller.reservation);
router.use('/deleteByDate', authMiddleware);
router.post('/deleteByDate', controller.deleteByDate);
router.get('/getReservation', controller.getReservation);
router.get('/getReservationList', controller.getReservationList);
router.get('/listReservation', controller.listReservation);

module.exports = router;
