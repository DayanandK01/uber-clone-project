// user routes require express because they need router from express to create a route

const express = require("express");
const router = express.Router();
const {body} = require("express-validator");

// userController to add the logic to a particular route (here user routes)
const userController = require("../controllers/user.controller.js");


// post register routes
router.post("/register",
    // validating user entered data using express-validator module
    [
    body("fullname.first_name").isLength({min:3}).withMessage("First name must be at least 3 characters long or more"),
    body("email").isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long or more"),
],

// using registerUser logic from userController
userController.registerUser
);

// exporting router as a whole
module.exports = router;