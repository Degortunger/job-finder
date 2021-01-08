const express = require('express');
const router  = express.Router();
const User     = require ('../models/User');

/* GET home page. */
router.get('/', (req, res) =>{
    res.render("login");
});

//Adicionar novo user
router.get('/register', (req, res) =>{
    res.render("register");
});

// add user via post
router.post('/register', (req, res)=>{
    let {username, password, email, city} = req.body;

    //insert
    User.create({
        username,
        password,
        email,
        city
    })
    .then(() => res.redirect('/'))
    .catch(err=> console.log(err));
});

router.post('/login', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
  
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
  
    passport.authenticate('local-login', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true,
    })(req, res, next);
   
  });

module.exports = router