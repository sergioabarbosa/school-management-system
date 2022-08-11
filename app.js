require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {validateJWT} = require('./api/validateJWT');
const {
  getUserById,
  userRegister,
  userLogin,
  getAllUsers,
  userLogout,
  updateUser,
} = require('./controllers/user');
const {getBlogPostById, createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost} = require('./controllers/blogpost');
const { checkToken } = require('./middlewares/verifiToken');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 8080;

// parse application/json
app.use(express.json());
app.use(cors())

// Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem-vindo ao nosso site'});
});

// Private Routes

// Get All Users
app.get('/users', validateJWT, getAllUsers);

// GetUserByID
app.get('/user/:id', validateJWT, getUserById);

// Register User
app.post('/register', userRegister);

// Login User
app.post('/login', userLogin);

// User Logout
app.post('/logout', userLogout)

// Update User
app.put('/user/:id', validateJWT, updateUser);

// Create posts
app.post('/blogposts/create', validateJWT, createBlogPost);

//Get posts
app.get('/blogposts', validateJWT, getBlogPosts);

// Update posts
app.put('/blogposts/:id', validateJWT, updateBlogPost);

// Delete posts
app.delete('/blogposts/:id', validateJWT, deleteBlogPost);

// GetPostByID
app.get('/blogposts/:id', validateJWT, getBlogPostById);


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7clpn.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
   app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))
   console.log('Conectou ao banco de dados')
})
.catch((err) => {console.log(err)})
