var express = require('express');
var router = express.Router();

router.get('/' , function(req , res, next){
    req.session.loggedInUser = null;
    res.redirect('/');
});

module.exports = router;