const fs = require("fs");

let string = "Hello there how aare you";

fs.writerFileSync("example.txt", string, "utf-8");

console.log(fs.readFileSync("example.txt"));
console.log()