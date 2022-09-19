const router = require('express').Router();
const tourController = require('../controllers/tour.controller');



/* Create Tour */
router.post('/', tourController.createTour).get("/", tourController.getTours);



module.exports = router;