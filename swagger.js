const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'My API',
      description: 'Contacts'
    },
    host: 'lesson2-76r3.onrender.com',
    schemes: ['https'],
  };
  
  const outputFile = './swagger.json';
  const routes = ['routes/index.js'];
  
  swaggerAutogen(outputFile, routes, doc);