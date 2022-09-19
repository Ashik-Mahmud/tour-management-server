/* importers area */ 
const app = require('./app');


/* Imports Routes Area */


/* Init Routes */
app.use()



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
