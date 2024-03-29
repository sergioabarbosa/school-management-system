// model register
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.model('User', {
  username: String,
  email: String,
  password: String,
  confirmpassword: String
});  

module.exports = User;