import React, { useState, useEffect } from 'react'

import Login from './components/Login'
import blogService from './services/blogs'
import './App.css'
import Usertable from './components/Usertable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedIn = window.localStorage.getItem('loggedIn')
    if (loggedIn) {
      const loggedUser = JSON.parse(loggedIn)
      setUser(loggedUser)
    }
  }, [])

  return (
    <div className='App'>
     {!user && <Login setUser={setUser} />} 
      {user &&  <><h2>blogs</h2> <Usertable setBlogs={setBlogs} setUser={setUser} user={user} blogs={blogs} /> </>}
    </div>
  )
}

export default App