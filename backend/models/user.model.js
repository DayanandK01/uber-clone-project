// require mongoose to create a userModel and bcrypt to hash and compare user password and jwt to generate a token
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// userSchema (just like a table in sql )
const userSchema = new mongoose.Schema({
    fullname:{
        first_name:{
            type:String,
            required:true,
            minlength: [3, "first name must be at least 3 character or long"]
        },
        last_name:{
            type:String,
            minlength: [3, "last name must be at least 3 character or long"]
        },
    },
    email:{
        type:String,
        required:true,
        minlength: [5, "email must be at least 5 character or long"]

    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    }
});

// function to generate auth token
userSchema.methods.generateAuthToken = function(){
    // signing a token to the user id 
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
};


// function to compare password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};


// function to hash user entered password
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
};


// creating userModel using userSchema
const userModel = mongoose.model("user", userSchema);


// exporting userModel
module.exports = userModel;