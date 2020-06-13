/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import BlogService from '../services/blogs'

const Blog = ({ token, user, setBlogs, blog }) => {

  const [showAll, setShowAll] = useState(false)

  const addLike = async (blog) => {
    const id = blog.id
    const newBlog = {
      user : blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    await BlogService.addLike(id, newBlog)
    const blogs = await BlogService.getAll()
    setBlogs(blogs)
  }

  const removeBlog = async (blog) => {
    if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await BlogService.removeBlog(token, blog.id)
      const blogs = await BlogService.getAll()
      setBlogs(blogs)
      console.log('removed')
    }
  }

  if(!showAll) {
    return(
      <div className="blog">
        <p className="title" onClick={() => setShowAll(!showAll)}>{blog.title}</p>
      </div>
    )
  }

  return (
    <div className="blog">
      <p className="title" onClick={() => setShowAll(!showAll)}>{blog.title}</p><br/>
      <p>{blog.url}</p><br/>
      <p>likes {blog.likes}</p> <button className="likebutton" onClick={() => addLike(blog)}>like</button><br/>
      <p>{blog.author}</p> <br/>
      {user === blog.user.username && <button className="removebutton" onClick={() => removeBlog(blog)}>remove</button>}
    </div>
  )



}

export default Blog
