const router = require('express').Router();
const tourController = require('../controllers/tour.controller');



/* Create Tour */
router.post('/', tourController.createTour);


/* Get All Tours */
router.get('/', tourController.getAllTours);


module.exports = router;