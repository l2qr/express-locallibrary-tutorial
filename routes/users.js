var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/dope', function(req, res, next){
  res.send('That dope shit');
});
module.exports = router;
