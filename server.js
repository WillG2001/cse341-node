require("dotenv").config();
const express = require('express');
const team2controller = require("./controllers/team2.js");
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  next();
});
app.use('/', require('./routes'));

// team 2 project
// app.get('/professional', team2controller.professionalRoute);
 
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  }
  else {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB, listening at port ' + (port));
    });
  }
});