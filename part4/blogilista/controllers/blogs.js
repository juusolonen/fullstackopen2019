const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
    .find({}).populate('user', {username: 1, name: 1, id: 1})
        if (blogs) {
          response.json(blogs)
        } else {
          response.status(404).end()
        }

  })

  blogsRouter.post('/', async (request, response, next) => {

    const user = await User.findOne()

    const blog = new Blog({
      title: request.body.title,
      author: request.body.author,
      url: request.body.url,
      likes: request.body.likes,
      user: user._id
    })
    if (!blog.likes) {blog.likes = 0}
    if (!blog.url || !blog.title) {
      response.status(400).end()
    }
  
    try {
    const addedBlog = await blog.save()
    user.blogs = user.blogs.concat(addedBlog._id)
    await user.save()
    response.status(201).json(addedBlog)
    } catch (excp) {
      next(excp)
    }

  })

  blogsRouter.delete('/:id', async (req, res, next) => {
  try{
    await Blog.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch(exception) {
    next(exception)
  }

  blogsRouter.put('/:id', async (req, res, next) => {
    try {
     const resp = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.status(200).json(resp)
    } catch(exception) {
      next(exception)
    }

  })


  })

  module.exports = blogsRouter