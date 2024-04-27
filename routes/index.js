const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.archieRoute);
routes.get('/gwen', lesson1Controller.gwenRoute);

module.exports = routes;