// requiring dotenv, express and cors modules
const dotenv = require("dotenv");

// config dotenv before using values present in .env files 
// (note: we can access values in .env file in any files if we config it)
dotenv.config();
const express = require("express");
const cors = require("cors");

// initializing express app
const app = express();

// require connectToDB function and userRoutes 
const connectToDB = require("./dataBase/connectToDB.js");
const userRoutes = require("./routes/user.routes.js");

// calling connectToDB function which helps to connect server to mongodb
connectToDB();

// built-in middlewares to handle user sent data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom built middlewares to handle user routes
app.use("/user", userRoutes);

// exports app
module.exports = app;