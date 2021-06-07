const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./suggest.controller');

router.use('/createSuggest', authMiddleware);
router.post('/createSuggest', controller.createSuggest);
router.get('/listSuggest', authMiddleware);
router.get('/listSuggest', controller.listSuggest);

module.exports = router;
