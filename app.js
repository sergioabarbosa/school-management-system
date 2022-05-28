require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { getUserById, userRegister, userLogin } = require('./controllers/user');
const {getBlogPostById, createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost} = require('./controllers/blogpost');
const { checkToken } = require('./middlewares/verifiToken');

const app = express();

// parse application/json
app.use(express.json());

// Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem-vindo ao nosso site'});
});

// Private Routes
// GetUserByID
app.get('/user/:id', checkToken, getUserById);

// Register User
app.post('/auth/register', userRegister);

// Login User
app.post('/auth/login', userLogin);

// Create posts
app.post('/blogposts/create', createBlogPost);

//Get posts
app.get('/blogposts', getBlogPosts);

// Update posts
app.put('/blogposts/:id', updateBlogPost);

// Delete posts
app.delete('/blogposts/:id', deleteBlogPost);

// Get POst By ID
app.get('/blogposts/:id', getBlogPostById);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7clpn.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
   app.listen(3000)
   console.log('Conectou ao banco de dados')
})
.catch((err) => {console.log(err)})
