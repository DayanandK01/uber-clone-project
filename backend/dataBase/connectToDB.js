// require mongoose to connect server to mongodb
const mongoose =require("mongoose");

// async function to connect to mongodb
async function connectToDB(){
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("server has successfully connected to mongodb")
    })
    .catch((error)=>{console.log("error in mongodb " + error)})
};

// export the connection function
module.exports = connectToDB;