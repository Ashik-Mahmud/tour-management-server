const router = require('express').Router();
const tourController = require('../controllers/tour.controller');
const viewCount = require('../middlewares/viewCount');



/* Create Tour */
router.post('/', tourController.createTour).get("/", tourController.getTours).get("/:id", viewCount ,tourController.getTour);



module.exports = router;