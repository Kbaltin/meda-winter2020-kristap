const fs = require("fs");
const { argv } = require("process");

const fileExists = fs.existsSync("birthdayreveal.json");

let contents; 

if (fileExists) {
    contents = JSON.parse(fs.readFileSync("birthdayreveal.json", "utf-8"));
    console.log(contents)
} else {
    console.log("File does not exist. We are going to create the file");
//    return;
const myObject = {
   "birthday": "September 8, 1980", 
   "arguments": []
   }
let myObjectConverted = JSON.stringify(myObject);
fs.writeFileSync("birthdayreveal.json", myObjectConverted, "utf-8");
} 
console.log(contents.arguments);
console.log(argv);

if (argv.length > 2) {
    // add third item to file
    console.log(argv[2]);
    contents.arguments.push(argv[2]);
    let myObjectConverted = JSON.stringify(contents);
    fs.writeFileSync("birthdayreveal.json", myObjectConverted, "utf-8");
} else {
    console.log("The third argument from the command line wasn't there");
    // print a message to terminal
}


// creating arrays
let baltin;
const kristap = 40;

baltin = "foreveryoung";
console.log([baltin, kristap, "man"].length);

// length at the end list number of items.
