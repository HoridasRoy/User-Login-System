var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
  res.render('register',{
    'title': 'Register'
  });
});
router.get('/login', function(req, res, next) {
  res.render('login',{
    'title': 'Login'
  });
});
router.get('/logout', function(req, res, next) {
  res.render('logout',{
    'title': 'Logout'
  });
});

router.post('/users/register', function(req, res, next){

  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;



  if(req.files.profileimage)
  {
    console.log('Uploading file ..');

    var profileImageOriginalName = req.files.profileimage.originalname;
    var profileImageName = req.files.profileimage.name;
    var profileImageMime = req.files.profileimage.mimetype;
    var profileImagePath = req.files.profileimage.path;
    var profileImageExt = req.files.profileimage.extension;
    var profileImageSize = req.files.profileimage.size;


  }
  else{
    var profileImageName = 'noimage.png';
  }

  req.checkBody('name','Name field is required').notEmpty;
  req.checkBody('email','Email field is required').notEmpty;
  req.checkBody('email','Email is not valid..').isEmail;
  req.checkBody('username','Username field is required').notEmpty;
  req.checkBody('password','Password field is required').notEmpty;
  req.checkBody('password2','password doesn not match').equals(req.body.password);

});
module.exports = router;
