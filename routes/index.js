var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    models.User.all({
        include:[ models.Task ]
    }).then(function(users){
        console.log(users);
        res.render('index', {
            title: 'Hello world',
            users: users
        });
    });
});

module.exports = router;
