const fs = require("fs");
 const combined = data1 + "\n"+ data;
fs.readFile("../demo.txt" , "utf-8" , function(err , data1){
    if(err) return console.log(err);
    console.log(data1) //output is in buffer form  add second arhguement to tell the type of text read!  by deafult is it buffer


const fs2 = require("fs");
 fs.readFile("../demo2.txt  , " , "utf-8" , function(err , data){
    if(err) return console.log(err)
        
        console.log(data); 
   

    
})
})

