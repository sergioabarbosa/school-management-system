require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { getUserById, userRegister, userLogin } = require('./controllers/user');
const { checkToken } = require('./middlewares/verifiToken');

const app = express();

// parse application/json
app.use(express.json());

// Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem-vindo ao nosso site'});
});

// Private Route
app.get('/user/:id', checkToken, getUserById);

// Register User
app.post('/auth/register', userRegister);


// Login User
app.post('/auth/login', userLogin);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7clpn.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
   app.listen(3000)
   console.log('Conectou ao banco de dados')
})
.catch((err) => {console.log(err)})
