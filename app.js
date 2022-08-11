require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {
  getUserById,
  userRegister,
  userLogin,
  getAllUsers,
  userLogout
} = require('./controllers/user');
const {getBlogPostById, createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost} = require('./controllers/blogpost');
const { checkToken } = require('./middlewares/verifiToken');
const cors = require('cors')

const app = express();

// parse application/json
app.use(express.json());
app.use(cors())

// Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem-vindo ao nosso site'});
});

// Private Routes

// Get All Users
app.get('/auth/users', getAllUsers);

// GetUserByID
app.get('/user/:id', checkToken, getUserById);

// Register User
app.post('/register', userRegister);

// Login User
app.post('/auth/login', userLogin);

// User Logout
app.post('/auth/logout', userLogout)


// Create posts
app.post('/blogposts/create', createBlogPost);

//Get posts
app.get('/auth/blogposts', getBlogPosts);

// Update posts
app.put('/blogposts/:id', updateBlogPost);

// Delete posts
app.delete('/blogposts/:id', deleteBlogPost);

// GetPostByID
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
