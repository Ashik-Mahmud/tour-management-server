//@routes tours/getAllTours
//  GET /api/v1/tours
//  Get all tours
//  Public
const getAllTours = async (req, res) => {

    return res.status(200).send({
        success: true,
        message: "Get all tours"
    });
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



module.exports = {getAllTours}