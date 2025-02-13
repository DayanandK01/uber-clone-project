// userService requires userModel to create a new user

const userModel = require("../models/user.model.js");


// exporting createUser function
// 4 parameters to create a new user
module.exports.createUser = async ({first_name, last_name, email, password})=>{

    // if no data is provided then throw and error 
    if(!first_name || !email || !password){
        throw new Error("all fields are required");
    };
    
    // creating new user using userModel
    const newUser = userModel.create({
        fullname:{
            first_name,
            last_name
        },
        email,
        password,
    });
    return newUser;
}