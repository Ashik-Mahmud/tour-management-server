/* importers area */ 
const app = require('./app');



/* Imports Routes Area */
const tourRouter = require('./routes/tour.route');

/* Init Routes */
app.use('/api/', tourRouter);



/* Global Error Handler */

app.use("*", (req, res) =>{
    res.status(404).send({
        success: false,
        message: "Page not found"
    })
})

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
