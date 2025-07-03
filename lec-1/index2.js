const fs = require("fs");
const { resolve } = require("path");
console.log(fs);
console.log("start");

setTimeout(()=>{
    console.log("setTimeout");
},0)
setImmediate(()=>{
    console.log("set Immediate"); })
fs.readFile("demo.txt" , (err, data)=>{
    console.log("file Read");
    console.log(data);
    setTimeout(()=>{
        console.log("timer 2");
    })
    setImmediate(()=>{
        console.log("imediate 2");
    })
})
function someTask(){
    return new Promise((resolve , reject)=>{
        resolve("promise")
    })
}
someTask().then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("nextTick")
})
console.log("end");