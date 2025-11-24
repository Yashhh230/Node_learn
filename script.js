const fs = require("fs");

console.log(fs);

const content = fs.readFileSync("notes.txt", "utf-8");
console.log("Done reading file", content);

fs.mkdirSync("yash");
fs.writeFileSync("yash/notes.txt", "hello i am yash", "utf-8");
console.log("Done writing file");

fs.appendFileSync("yash/notes.txt", "hello i am yash", "utf-8");
console.log("Done appending file");
