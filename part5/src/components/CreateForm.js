import React, {useState} from 'react'
import blogService from '../services/blogs'
import Message from './Message'

const CreateForm = ({setBlogs, token}) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [messageTitle, setMessageTitle] = useState('')

    const createNew = async (e) => {
        e.preventDefault()
    const added = await blogService.create(token, {title, author, url})
    const blogs = await blogService.getAll()
    setBlogs(blogs)
    setMessageTitle(added.title)
    setTimeout(() => {
        setMessageTitle('')
    }, 5000);
    }

    return (
        <>
        {messageTitle && <Message title={messageTitle} error={null} /> }
       <div className="create"> 
           <h2>create new</h2>
           <form onSubmit={createNew}>
               title:<input type="text" value={title} onChange={({target}) => {setTitle(target.value)}}/> <br/>
               author:<input type="text" value={author} onChange={({target}) => {setAuthor(target.value)}}/><br/>
               url:<input type="text" value={url} onChange={({target}) => {setUrl(target.value)}}/><br/>
               <button type="submit">create</button> 
           </form>
       </div>
       </>
    )
}

export default CreateForm