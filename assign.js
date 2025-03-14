const express = require("express");
const app = express();


const requestTimes = []
function averageTime(req, res, next) {
    const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(duration);
    
    requestTimes.push(duration);
    
    // Compute average
    const avgTime = requestTimes.reduce((a, b) => a + b, 0) / requestTimes.length;
    console.log(`Average request time: ${avgTime.toFixed(2)}ms`);
  });
  next();
  };
  app.get("/health-checkup",averageTime, function (req, res) {
    res.send("all set")
  })
  
  app.listen(3001);