
// Create Tour Services Here

const Tour = require("../models/tour.model");

exports.createTourService = async() =>{
    return await Tour.create(req.body);
}

