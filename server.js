require("dotenv").config();
const express = require('express');
const app = express();
const team2controller = require("./controllers/team2.js");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  next();
});

//app.use('/', require('./routes','./team2.js'));
app.get('/professional', team2controller.professionalRoute);
 
app.listen(process.env.PORT, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT));
});