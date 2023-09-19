// backend/index.js
const express = require("express");
//const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
//const cors = require('cors');


const app = express();
const port = 5050;



app.get('/',(req,res) => {
    res.send("<h2>Hello Oshayer<\h2>");
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  