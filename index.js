const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index');
try {
  app.listen(5001);
  console.log('Server started at port : 5001');

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  app.use('/', router);
} catch (error) {
  console.log(error);
}
