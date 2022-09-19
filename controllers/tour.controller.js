

const { createTourService } = require("../services/tour.services");


//@routes tours/createTours
//  POST /api/tours
//  Create a tour
//  Public

const createTour = async (req, res) => {
    try {
        const tour = await createTourService(req.body);
        res.status(201).send({
            success: true,
            data: tour
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
}



module.exports = {createTour}