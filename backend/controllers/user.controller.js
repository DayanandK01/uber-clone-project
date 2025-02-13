// user controllers includes all the logic (ex: registering or logging in a user)

//requires userModel because controllers tend to modify userModel
// also require userService because they include logic to create a user
const userModel = require("../models/user.model.js");
const userService = require("../services/user.service.js");

// validationResult gives errors present in the user input data to validate them
const {validationResult} = require("express-validator");


// exporting registerUser function 
module.exports.registerUser = async (req, res, next)=>{
    
    // storing errors present in the request 
    const errors = validationResult(req);

    // if there is an error then return the user
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    // if no errors then access data from req.body 
    const {fullname, email, password} = req.body;


    // check if user exists already 
    const isUserAlready = await userModel.findOne({ email });

    // if user exists already then return them
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    };


    // hash the user entered password for security purposes
    const hashedPassword =await userModel.hashPassword(password);

    //call createUser function from userService to create a new user

    const user = await userService.createUser({
        first_name: fullname.first_name,
        last_name: fullname.last_name,
        email,
        password: hashedPassword
    });

    // call generateAuthToken function from userModel to generate a token when a user registers   
    const token = user.generateAuthToken();


    // send a success status along with the token and the created user
    res.status(201).json({token, user});



}