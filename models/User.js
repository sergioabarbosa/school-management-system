// model register
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.model('User', {
  name: String,
  email: String,
  password: String
});  

module.exports = User;