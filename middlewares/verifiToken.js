require ('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Function check token
function checkToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(token == null) return res.sendStatus(401).json({msg: 'Não autorizado'});

  try{
    const secret = process.env.TOKEN_SECRET;
    jwt.verify(token, secret);
    next();
  }catch(error){
    return res.sendStatus(400).json({msg: 'Token Inválido'});
  }
}

module.exports = { checkToken };