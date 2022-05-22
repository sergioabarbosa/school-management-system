require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const verifyToken = require('./middlewares/verifiToken');

const app = express();

// parse application/json
app.use(express.json());

// Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem-vindo ao nosso site'});
});

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

// Private Route
app.get('/user/:id', checkToken, async (req, res) => {
  const {id}= req.params;

  //check if user exists
  const user = await User.findById(id, '-password');
  if(!user){
    return res.status(404).json({msg: 'Usuário não encontrado'});
  }

  res.status(200).json(user);
});

// Register User
app.post('/auth/register', async (req, res) => {
  try{
    const { name, email, password, confirmpassword } = req.body;
    const user = await User.findOne({email});
    // Validations
    if(user) return res.status(400).json({msg: 'Usuário já existe'});
    if (!name) return res.status(400).json({msg: 'O campo name é obrigatotio'});
    if (!email) return res.status(400).json({msg: 'O campo email é obrigatotio'});
    if (!password) return res.status(400).json({msg: 'O campo password é obrigatotio'});
    if (!confirmpassword) return res.status(400).json({msg: 'O campo confirmpassword é obrigatotio'});
    // bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashPassword
    });
    await newUser.save();
    res.status(201).json({msg: 'Usuário criado com sucesso'})
  }catch(err){
    res.status(500).json({msg: 'Erro ao criar usuário'})
  }
});


// Login User
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({msg: 'O campo email é obrigatotio'});
  }
  if (!password) {
    return res.status(422).json({msg: 'O campo senha é obrigatotio'});
  }

  // check user exist
  const user = await User.findOne({email});
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
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.7clpn.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
   app.listen(3000)
   console.log('Conectou ao banco de dados')
})
.catch((err) => {console.log(err)})

// mongodb+srv://sergiobarbosa:<password>@cluster0.7clpn.mongodb.net/?retryWrites=true&w=majority
// senha: TcspDSCR3y9ADzTZ