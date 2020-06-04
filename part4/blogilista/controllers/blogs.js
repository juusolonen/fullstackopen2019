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

  blogsRouter.post('/', async (request, response) => {
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

  module.exports = blogsRouter