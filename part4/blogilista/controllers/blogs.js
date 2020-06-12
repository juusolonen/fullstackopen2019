const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


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

    if(!request.token) {
      return response.status(401).json({error: 'token is missing or not valid'})
    }
   
    const decoded = jwt.verify(request.token, process.env.SECRET)

    if(!decoded.id) {
      return response.status(401).json({error: 'token is missing or not valid'})
    }

    const user = await User.findById(decoded.id)

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

    if(!req.token) {return res.status(401).json({error: 'not authorized'})}
    
  try{
    const decoded = jwt.verify(req.token, process.env.SECRET)
    const blog = await Blog.findById(req.params.id)
      
      if(decoded.id === blog.user.toString()) {
      
        await Blog.deleteOne(blog)
          return res.status(204).end()
      } else {
        return res.status(401).json({error: 'not authorized'})
      }

  } catch(exception) {
  
    return res.status(500).json({error: exception.message})
  }
})

  blogsRouter.put('/:id', async (req, res, next) => {
    try {
     const resp = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
     .populate('user', {username: 1, name: 1, id: 1})
      res.status(200).json(resp)
    } catch(exception) {
      next(exception)
    }

  })


  

  module.exports = blogsRouter