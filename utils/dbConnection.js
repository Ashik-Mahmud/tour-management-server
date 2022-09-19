const mongoose = require('mongoose');
require('dotenv').config();

/* Connect Mongoose Here */

const createDatabaseConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL, {}, (err) => {
        if(err){
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
        console.log("Connected to the Database");
    });
}
module.exports = createDatabaseConnection;