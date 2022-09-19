const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;


/* Init Global Middle wares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Test Routes */
app.get('/', (req, res) => {
    res.send({success: true, message: "Welcome to the Tour Management System (TMS) API"});
});

/* Listen to the PORT */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;