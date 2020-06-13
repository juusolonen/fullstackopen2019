import React, { useState } from 'react'
import Blog from './Blog'
import CreateForm from './CreateForm'

const Usertable = ({setBlogs, setUser, user, blogs}) => {

    const [showForm, setShowForm] = useState(false)
    const [messageTitle, setMessageTitle] = useState('')

    const logout = () => {
        window.localStorage.clear()
        setUser(null)
    }

    return (
        <div>
            <div>
            <p>{user.name} logged in  <button onClick={logout}>Logout</button></p>
            {showForm && <CreateForm messageTitle={messageTitle} setMessageTitle={setMessageTitle} setShowForm={setShowForm} setBlogs={setBlogs} token={user.token} />}
            {!showForm && <button onClick={() => setShowForm(true)}>new note</button> }
            </div>
                {blogs.map(blog =>
                        <Blog token={user.token} user={user.username} setBlogs={setBlogs}  key={blog.id} blog={blog} />
                    )}
            </div>
    )
}

export default Usertable