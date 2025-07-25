const express = require("express");
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname+"/index.html");        
// });
// app.get("/about.html" , (req , res)=>{
//     res.sendFile(__dirname + "/about.html");
// }); 
app.post("/registration", (req, res) => {
   console.log(req.body)
   let username = req.body.username;
   let email = req.body.email;
   let password = req.body.password;    
   res.json({
         username: username,
         email: email,
         password: password 
   })
});
app.listen(3300, () => {
  console.log('Server is running on port 3300');
});