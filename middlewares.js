"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;




//  app.get("/", (req, res, next) => {

//     req.customData="customData"
//     res.customDataWithResponse="Custom data With response"
//     next()
//   res.send({
//     message: "1.çalıştı",
//   });
// });

// app.get("/", (req, res) => {
//   res.send({
//     customData:[
//         req.customData,
//         res.customDataWithResponse
//     ],
//     message: "2.çalıştı",
//   });
// // });

// const middleFunction1 = (req, res, next) => {
//   const skip = req.query.skip ?? false

//   req.customData = 'Custom Data With Request'
//   res.customDataWithResponse = 'Custom Data With Response'

//   if (skip) {
      
//       // Bir sonraki route'a (bağımsız fonksiyona) git:
//       next('route')

//   } else {
//       // Bir sonraki callback fonksiyona git:
//       next()

//   }
// };

// const middleFunction2 = (req, res, next) => {
  
//   res.send({
//     customData: [req.customData, res.customDataWithResponse],
//     message: "function 2.çalıştı",
//   });
//  };
// app.get("/", middleFunction1, middleFunction2, (req, res) => {
//   res.send({
//     customData:[
//         req.customData,
//         res.customDataWithResponse
//     ],
//     message: "welcome to home",
//   });
// });

// app.get("/",(req, res) => {
//   res.send({
   
//     message: "next route",
//   });
// });





// const middleFunction1 = (req, res, next) => {
//   const skip = req.query.skip ?? false

//   req.customData = 'Custom Data With Request'
//   res.customDataWithResponse = 'Custom Data With Response'

//   if (skip) {
      
//       // Bir sonraki route'a (bağımsız fonksiyona) git:
//       console.log("next-route çalıştı")
//       next('route')

//   } else {
//       // Bir sonraki callback fonksiyona git:
//       console.log("next çalıştı")
//       next()

//   }
// };

// app.use(middleFunction1)
// app.use("/", middleFunction1)

// app.get("/",(req, res) => {
//   res.send({
   
//     message: "1. route",
//   });
// });


const [middleFunction1,middleFunction2]=require("./middlewares/")


// app.use(middleFunction1,middleFunction2)

// const middleFunctions = require("./middlewares/")
// app.use(middleFunctions)

app.use(require("./middlewares/"))
app.get("/*",(req, res) => {
  res.send({
   
  message:"welcome to home"
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
