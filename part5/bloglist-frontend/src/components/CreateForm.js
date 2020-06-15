/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import blogService from '../services/blogs'
import Message from './Message'

const CreateForm = ({ messageTitle, setMessageTitle, setShowForm, setBlogs, token }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const createNew = async (e) => {
    e.preventDefault()

    const note = { title, author, url }
    const added = await blogService.create(token, note)
    const blogs = await blogService.getAll()

    setBlogs(blogs)
    setMessageTitle(added.title)

    setTimeout(() => {
      setTimeout(() => {
        setMessageTitle('')
      }, 4000)
      setShowForm(false)
    }, 1000)
  }

  return (
    <>
      {messageTitle && <Message title={messageTitle} error={null} /> }
      <div className="create">
        <h2>create new</h2>
        <form onSubmit={createNew}>
               title:<input type="text" id="title" value={title} onChange={({ target }) => {setTitle(target.value)}}/> <br/>
               author:<input type="text" id="author" value={author} onChange={({ target }) => {setAuthor(target.value)}}/><br/>
               url:<input type="text" id="url" value={url} onChange={({ target }) => {setUrl(target.value)}}/><br/>
          <button id="createnew" type="submit">create</button> <br/>
          <button onClick={() => setShowForm(false)}>cancel</button>
        </form>
      </div>
    </>
  )
}

export default CreateForm