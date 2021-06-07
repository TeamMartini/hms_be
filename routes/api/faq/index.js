const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./faq.controller');

router.use('/createFaq', authMiddleware);
router.post('/createFaq', controller.createFaq);
router.get('/listFaq', controller.listFaq);

module.exports = router;
