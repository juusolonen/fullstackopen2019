import React from 'react'
import Blog from './Blog'
import CreateForm from './CreateForm'

const Usertable = ({setBlogs, setUser, user, blogs}) => {

    const logout = () => {
        window.localStorage.clear()
        setUser(null)
    }

    return (
        <div>
            <div>
            <p>{user.name} logged in  <button onClick={logout}>Logout</button></p>
            <CreateForm setBlogs={setBlogs} token={user.token} />
            </div>
       {blogs.map(blog =>
            <Blog  key={blog.id} blog={blog} />
          )}
          </div>
    )
}

export default Usertable