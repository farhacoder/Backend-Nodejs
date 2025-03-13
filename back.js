const express = require("express");
const app = express();

function userMiddleware(req,res,next){
  
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "farha" && password != "pass") {
    res.status(400).json({
      msg: "user doest not exit",
    });
    
  }
else{
  next()
}}
   function Middleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
      res.status(400).json({
        msg: "wrong input",
      });
    }
     else{ 
      next()
     }
    
  
  
}
   

app.get("/health-checkup",userMiddleware,Middleware, function (req, res) {
  res.json({
    msg:"all set"
  })
  
  })
 

app.listen(3000);
