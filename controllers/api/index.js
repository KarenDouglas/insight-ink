const express = require('express');
const router = express.Router();

// const userRoutes = require('./userRoutes');
const habitRoutes = require('./habitRoutes');
// const entryRoutes = require('./entryRoutes')

// router.use('/user', userRoutes);
router.use('/habits', habitRoutes);
// router.use('/entry', entryRoutes)

module.exports = router;
