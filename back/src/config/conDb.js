require("dotenv").config();
const mongoose = require("mongoose");

const URI =  `${process.env.DB_HOST}+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@movie.yvdttps.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`
const conDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
    }
};

module.exports = conDb;

/* require("dotenv").config();
const mongoose = require("moongose");

const conDb = async () => {
    mongoose.connect();
};

module.exports = conDb; */

/* const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
    }
};
 */