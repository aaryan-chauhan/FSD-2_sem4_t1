// write a node js script to copy content of one file to another file data should be fetch from source.txt and insert it to destination.txt
var fs=require("fs")
fs.writeFileSync("Source.txt","Hello how are you")
data=fs.readFileSync("Source.txt","utf-8")
fs.writeFileSync("Destination.txt",data)