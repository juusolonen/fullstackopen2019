const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
        if (blogs) {
          response.json(blogs)
        } else {
          response.status(404).end()
        }

  })

  blogsRouter.post('/', async (request, response, next) => {
    const blog = new Blog(request.body)
    if (!blog.likes) {blog.likes = 0}
    if (!blog.url || !blog.title) {
      response.status(400).end()
    }
  
    try {
    const addedBlog = await blog.save()
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