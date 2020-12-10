const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const credentials = require("./credentials.js");

const dbCredentials = credentials.dbUrl;
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
letdbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error:" + error);
    } else {
        console.log("MongoDB connection opened");
    }
});

let todoSchema = new mongoose.Schema({
    
    title: String,
    text: String,
    completed: Boolean,
    priority: Number,
    timestamp: Number
});
let todoModel = new mongoose.model("notecollections", todoSchema);

const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port" + port);

app.use("/", express.static("client/"));

app.post("/newNote", (request, response) => {
    
    const note = request.body;

    console.log(typeof note.completed);

    let newNoteDocument = new todoModel({
        title: note.title,
        text: note.text,
        completed: (note.completed === "true"),
        archived: (note.archived === "true"),
        priority: parseInt(note.priority),
        timestamp: parseInt(note.timestamp) 
    });

   newNoteDocument.save((error) => {
console.log(error);
    const responseObject = {
        saved: false,
        error: null   
    };
    
    if (error) {
          response.send(responseObject);
       } else {
        responseObject.saved = true;
        response.send(responseObject);
            
       }
   });

});