// Bring in the express package.
const express = require("express");
const { receiveMessageOnPort } = require("worker_threads");

// Run a copy of the express package.
const app = express();

// Connects our HTTP server with the Express web module.
const http = require("http").Server(app);

// Decide on the port number to listen on when running Express server.
// DO NOT use 80, 443, 20, 21, 22.
const port = 3000;

// Tell http module that we will be listening on the number in the port variable.
http.listen(port);

console.log("Express server is now running on " + port);

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/") );
// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));