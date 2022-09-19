const Tour = require("../models/tour.model");

// Create Tour Services Here
exports.createTourService = async (data) => {
  return await Tour.create(data);
};

// Get Tours Services Here
exports.getToursService = async (queries) => {
  const counts = await Tour.countDocuments();
  const pageCount = Math.ceil(counts / queries.limit);
  const result = await Tour.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.select)
    .sort(queries.sort);
  return {pageCount, counts, result };
};


// Get Single Tour Services Here
exports.getTourService = async (id) => {
    return await Tour.findById(id);
}