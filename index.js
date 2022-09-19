/* importers area */ 
const app = require('./app');



/* Imports Routes Area */
const tourRouter = require('./routes/tour.route');

/* Init Routes */
app.use('/api/tours', tourRouter);



/* Global Error Handler */
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        success: false,
        message: err.message
    });
});

process.on("unhandledRejection", (err, promise) => {
    if(err){
        console.log(`Error: ${err.message}`);
        app.close(() => process.exit(1));
    }
});
