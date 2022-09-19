
const Tour = require("../models/tour.model");

// Create Tour Services Here
exports.createTourService = async(data) =>{
    return await Tour.create(data);
}

// Get Tours Services Here
exports.getToursService = async() =>{
    return await Tour.find();
};