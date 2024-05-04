const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));
 
// lesson 1 things
// const lesson1Controller = require('../controllers/lesson1');
// routes.get('/', lesson1Controller.archieRoute);
// routes.get('/gwen', lesson1Controller.gwenRoute);

module.exports = router;