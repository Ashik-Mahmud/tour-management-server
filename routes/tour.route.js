const router = require('express').Router();
const tourController = require('../controllers/tour.controller');

// /* Init Routes */
router.get('/', tourController.getAllTours);

module.exports = router;