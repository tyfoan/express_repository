var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/create/', function(req, res, next) {
    res.send('respond create');
});

module.exports = router;
