const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./board.controller');

router.use('/createBoard', authMiddleware);
router.post('/createBoard', controller.createBoard);
router.get('/getBoardInfo', controller.getBoardInfo);
router.get('/listBoard', controller.listBoard);

module.exports = router;
