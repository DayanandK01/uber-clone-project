// user routes require express because they need router from express to create a route

const express = require("express");
const router = express.Router();
const {body} = require("express-validator");

// userController to add the logic to a particular route (here user routes)
const userController = require("../controllers/user.controller.js");

// middle ware to authenticate logged-in user
const authMiddleware = require("../middlewares/auth.middleware.js");


// post register route
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


// post login route
router.post("/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body('password').isLength({min:6}).withMessage("Password is incorrect")
    ],
    userController.loginUser
);

// get profile route
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

// logout user
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

// exporting router as a whole
module.exports = router;