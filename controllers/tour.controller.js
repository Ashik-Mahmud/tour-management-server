

//@routes tours/createTours
//  POST /api/tours
//  Create a tour
//  Public
const createTour = async (req, res) => {
    try {
        const tour = await Tour.create(req.body);
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




//@routes tours/getAllTours
//  GET /api/v1/tours
//  Get all tours
//  Public
const getAllTours = async (req, res) => {

    try {
        const tours = await Tour.find();
        res.status(200).json({
            success: true,
            count: tours.length,
            data: tours
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



module.exports = {getAllTours, createTour}