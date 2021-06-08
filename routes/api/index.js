const router = require('express').Router();
const auth = require('./auth');
const board = require('./board');
const faq = require('./faq');
const suggest = require('./suggest');
const reserve = require('./mentoring');
const iot = require('./iot');

router.use('/auth', auth);
router.use('/board', board);
router.use('/faq', faq);
router.use('/suggest', suggest);
router.use('/reserve', reserve);
router.use('/iot', iot);

module.exports = router;
