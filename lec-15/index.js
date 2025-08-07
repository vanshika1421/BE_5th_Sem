const express = require('express');
const app = express();      
app.use(express.static(__dirname+'/public')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
   try{
    const email = req.body.email;
     const password = req.body.password;
console.log(email , password);

   
let newUser={
    email,
    password
};


  res.json({
    data:newUser,
    success: true,
    message: "User added SuccessFully"
  });
}catch(err){
  res.json({
    
    success: false,
    error : error,

  });
}
}
);
app.listen(3330 , ()=>{
    console.log("Server is running on port 3330");
})