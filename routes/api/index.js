const router = require('express').Router();
const socialRoutes = require('./socialRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/socials', socialRoutes);
router.use('/friends', friendRoutes);

module.exports = router;