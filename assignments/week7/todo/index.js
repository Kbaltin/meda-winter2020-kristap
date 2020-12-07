const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dbCredentials = "numongodb+srv://ToDoUser:ToDoUser@cluster0.ecyso.mongodb.net/todoApp?retryWrites=true&w=majorityll";
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
letdbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error:" + error);
    } else {
        console.log("MongoDB connection opened");
    }
});

const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port" + port);

app.use("/", express.static("client/"));