const router = require('express').Router();
const auth = require('./auth');
const room = require('./room');
const board = require('./board');
const faq = require('./faq');

router.use('/auth', auth);
router.use('/room', room);
router.use('/board', board);
router.use('/faq', faq);

module.exports = router;
