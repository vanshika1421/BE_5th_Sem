const fs = require("fs");
fs.writeFile("../demo.txt" , "hello g27" , function(err ){
    if(err) return console.log(err);
    //console.log(data);  // => results in undefined as..only one arguement is there ehich is err ! no data is there 
 console.log("success!");
})
const fs2 = require("fs");
    
fs.writeFile("../demo2.txt" , "hello hi g27" , function(err ){
    if(err) return console.log(err);
    //console.log(data);   => results in undefined as..only one arguement is there ehich is err ! no data is there 
console.log("success 2!")
})
const fs3 = require("fs");
    
fs.writeFile("../C.txt" , combined, function(err){
    if(err) return console.log(err);
    //console.log(data);   => results in undefined as..only one arguement is there ehich is err ! no data is there 
console.log("success 2!")
})