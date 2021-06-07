const router = require('express').Router();
const auth = require('./auth');
const room = require('./room');
const board = require('./board');
const faq = require('./faq');
const suggest = require('./suggest');

router.use('/auth', auth);
router.use('/room', room);
router.use('/board', board);
router.use('/faq', faq);
router.use('/suggest', suggest);

module.exports = router;
