require ('dotenv').config();
const jwt = require('jsonwebtoken');
const Blogpost = require('../models/Blogpost');
const bcrypt = require('bcrypt');

const createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  const newBlogPost = new Blogpost({
    title,
    content,
    author
  });
  
  if(!title || !content || !author) {
     return res.status(400).json({msg: 'Preencha todos os campos'});
  }

  await newBlogPost.save();
      return res.status(201).json({msg: 'Post criado com sucesso'});
}

const getBlogPosts = async (req, res) => {
  const blogPosts = await Blogpost.find();
  res.status(200).json(blogPosts);
}

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await Blogpost.findById(id);
    return res.status(200).json(blogPost);
}

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const updatedBlogPost = await Blogpost.findByIdAndUpdate(id, {
    title,
    content,
    author
  }, { new: true });
    return res.status(200).json(updatedBlogPost);
}

const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  await Blogpost.findByIdAndDelete(id);
    return res.status(200).json({msg: 'Post deletado com sucesso'});
}

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost
}