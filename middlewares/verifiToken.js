require ('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Function check token
function checkToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = jwt.sign({
    data: user
  }, secret, jwtConfig);

  if(!token) return res.status(401).json({msg: 'Não autorizado'});
  
  try{
    const secret = process.env.TOKEN_SECRET;
    const jwtvonfig = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };

      res.status(200).json({
        token
      });
    next();
  }catch(error){
    return res.status(400).json({msg: 'Token Inválido'});
  }
}

module.exports = { checkToken };