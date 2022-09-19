
// Create Tour Services Here

const Tour = require("../models/tour.model");

exports.createTourService = async(data) =>{
    return await Tour.create(data);
}

