var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NodeAuth');
var db = mongoose.connection;


var UserSchema = mongoose.Schema({

  username: {
    type: String,
    index: true
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  name:{
    type:String
  },

  profileimage:{
    type:String
  }

});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser,callback){
  newUser.save(callback);
}
