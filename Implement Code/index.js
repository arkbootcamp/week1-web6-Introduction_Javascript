// (function(exports, require, module, __filename, __dirname) {
//   // in here
// })
console.log(__filename);
console.log(__dirname);

// const name = require("./name.js");

// // const name = "Bagus";
// name();

const myProfile = require("./name.js");
const path = require("path");

const fileLocation = path.join(__dirname, "index.js");
const fileName = path.basename(__filename);

console.log(fileLocation);
console.log(fileName);
console.log(myProfile);
