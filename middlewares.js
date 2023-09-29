"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res, next) => {

    req.customData="customData"
    res.customDataInResponse="Custom data ın response"
    next()
  res.send({
    message: "1.çalıştı",
  });
});



app.get("/", (req, res) => {
  res.send({
    customData:[
        req.customData,
        res.customDataInResponse
    ],
    message: "2.çalıştı",
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
