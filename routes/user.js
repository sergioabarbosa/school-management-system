const router = require('express').Router();
const User = require('../models/User');
const { getUserById, userRegister, userLogin } = require('./controllers/user');
const { checkToken } = require('./middlewares/verifiToken');

const userController = require('../controllers/user');

// Private Route
app.get('/user/:id', checkToken, getUserById);

// Register User
app.post('/auth/register', userRegister);

// Login User
app.post('/auth/login', userLogin);