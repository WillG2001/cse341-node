const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
app.get('/', lesson1Controller.archieRoute);
app.get('/gwen', lesson1Controller.gwenRoute);

module.exports = routes;