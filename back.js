const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "farha" && password != "pass") {
    res.status(400).json({
      msg: "user doest not exit",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "wrong input",
    });
    return;
  }
  res.json({ msg: "you are okay" });
});

app.listen(3000);
