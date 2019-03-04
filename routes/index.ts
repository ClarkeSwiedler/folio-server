var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/landing', function(req, res, next) {
  console.log('A request was made.');
  res.send('Hello from Express!!');
});

module.exports = router;
