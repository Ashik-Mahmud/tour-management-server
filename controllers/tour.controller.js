

const { createTourService, getToursService, getTourService } = require("../services/tour.services");


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


// @routes tours/getTours
//  GET /api/tours
//  Get all tours
//  Public

const getTours = async (req, res) => {
    try {
        const { fields, page, limit, sort } = req.query;
        const queries = {};

        /* by fields */
        if(fields){
            const fieldsArray = fields.split(',').join(' ');
            queries.select = fieldsArray;
        }

        /* by paginated */         
         if(page || limit){
            const currentPage = parseInt(page);
            const limitPerPage = parseInt(limit);
            const skip = (currentPage - 1) * limitPerPage;
            queries.skip = skip;
            queries.limit = limitPerPage;
        }   
        
        /* by sorted */
        if(sort){
            const sortBy = sort.split(',').join(' ');
            queries.sort = sortBy;
        }
        
        const tours = await getToursService(queries);
        res.status(200).send({
            success: true,
            data: tours
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
}


// @routes tours/getTour
//  GET /api/tours/:id
//  Get a tour
//  Public
const getTour = async (req, res) => {
    try {
        const tour = await getTourService(req.params.id);
        res.status(200).send({
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




module.exports = {createTour, getTours, getTour}