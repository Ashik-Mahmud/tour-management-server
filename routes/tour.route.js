const router = require('express').Router();
const tourController = require('../controllers/tour.controller');
const viewCount = require('../middlewares/viewCount');



/* Create Tour */

router.post('/tours', tourController.createTour)
router.get("/tours", tourController.getTours)
router.get("/tours/:id", viewCount ,tourController.getTour)
router.patch("/tour/:id", tourController.updateTour)
router.get("/tour/trending", tourController.getTrendingTours);
router.get("/tour/cheapest", tourController.getCheapestTours);

module.exports = router;