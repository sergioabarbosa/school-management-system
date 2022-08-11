require ('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const getUserById = async (req, res) => {
  const {id}= req.params;

  //check if user exists
  const user = await User.findById(id, '-password');
  if(!user){
    return res.status(404).json({msg: 'Usuário não encontrado'});
  }

  return res.status(200).json(user);
}

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
}

const userRegister = async (req, res) => {
  try{
    const { username, email, password, confirmpassword } = req.body;
    const user = await User.findOne({username});
    // Validations
    if(user) return res.status(400).json({msg: 'Usuário já existe'});
    if (!username) return res.status(400).json({msg: 'O campo name é obrigatotio'});
    if (!email) return res.status(400).json({msg: 'O campo email é obrigatotio'});
    if (!password) return res.status(400).json({msg: 'O campo password é obrigatotio'});
    if (!confirmpassword) return res.status(400).json({msg: 'O campo confirmpassword é obrigatotio'});
    // bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashPassword,
      email
    });
    await newUser.save();
    return res.status(201).json({msg: 'Usuário criado com sucesso'})
  }catch(err){
    return res.status(500).json({msg: 'Erro ao criar usuário'})
  }
}

const userLogin = async (req, res) => {
  
  const { username, password, email } = req.body;

  if (!username) {
    return res.status(422).json({msg: 'O campo email é obrigatotio'});
  }
  if (!password) {
    return res.status(422).json({msg: 'O campo senha é obrigatotio'});
  }
  if (!email) {
    return res.status(422).json({msg: 'O campo email é obrigatotio'});
  }

  // check user exist
  const user = await User.findOne({username});
  if (!user) {
    return res.status(422).json({msg: 'Usuário não encontrado'});
  }

  // check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(422).json({msg: 'Senha incorreta'});
  }

  try {
    const secret = process.env.TOKEN_SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
       secret, 
      
    );
     res.status(200).json({msg: 'Autenticado com sucesso', token});
  }catch{
    res.status(500).json({msg: 'Erro ao autenticar'});
  }
}

const userLogout = async (req, res) => {
  res.status(200).json({msg: 'Sessão finalizada'});
}

module.exports ={
  getUserById,
  userRegister,
  userLogin,
  getAllUsers,
  userLogout
};