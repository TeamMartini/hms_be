const router = require('express').Router();
const auth = require('./auth');
const room = require('./room');

router.use('/auth', auth);
router.use('/room', room);

module.exports = router;
