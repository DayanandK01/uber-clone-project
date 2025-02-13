
// require http module and app from app.js file
const http = require("http");
const app = require("./app.js");

// port from .env file
const port = process.env.PORT || 3000;
 
// creating a http server using app from app.js
const server = http.createServer(app);

// server listening to the port 
server.listen(port, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});