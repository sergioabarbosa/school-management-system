// model register
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.model('User', {
  name: String,
  username: String,
  email: String,
  usertype: String,
  password: String,
  confirmpassword: String
});  

module.exports = User;