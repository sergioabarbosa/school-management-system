// model register
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Blogpost = new mongoose.model('Blogpost', {
  author: String,
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});  

module.exports = Blogpost;