// write a node js program to crud opreation of the file management 
// 1. create one folder name hello
// 2. create file in it name abc.txt and enter data into it 
// 3. add more data at last in file 
// 4. read data without getting buffer data at first 
// 5. rename the file name xyz.txt
// 6. delete both file and folder 
const fs = require('fs');
fs.writeFileSync("h1.html",'<html><body><h1 style="color:red">hello<h1><body><html>')
data=fs.readFileSync("h1.html","utf-8")
console.log(data);
fs.writeFileSync("xyz.json",'{"name":"lj","age":25}')
data1=fs.readFileSync("xyz.json","utf-8")
var data1=JSON.parse(data1)
console.log(data1.name);
