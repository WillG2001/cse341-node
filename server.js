const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/', lesson1Controller.archieRoute);
app.get('/gwen', lesson1Controller.gwenRoute);

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});