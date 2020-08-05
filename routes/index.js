var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'Welcome to The Image Posting Site'
  });
});

router.get('/login', function(req, res){
  res.render('login');
});

module.exports = router;