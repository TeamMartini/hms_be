const router = require('express').Router();
const auth = require('./auth');
const room = require('./room');
const board = require('./board');

router.use('/auth', auth);
router.use('/room', room);
router.use('/board', board);

module.exports = router;
