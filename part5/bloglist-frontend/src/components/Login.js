/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import LoginService from '../services/LoginService'
import Message from './Message'
import propTypes from 'prop-types'

const Login = ({ setUser }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const log = async (e) => {
    e.preventDefault()
    try {
      const user = await LoginService.login({ username, password })
      setUser(user)
      window.localStorage.setItem('loggedIn', JSON.stringify(user))
    } catch (exp) {
      setError('wrong username or password')
      setTimeout(() => {
        setError('')
      }, 5000)
    }


  }

  return (
    <div className="loginform">
      <h3>log in to application</h3>
      {error && <Message error={error} />}
      <form>
                username
        <input type="text" id="username" value={username} onChange={({ target }) => setUsername(target.value)}></input> <br/>
                password
        <input type="password" id="password" value={password} onChange={({ target }) => setPassword(target.value)} ></input> <br/>
        <button id="loginbtn" onClick={log}>login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  setUser: propTypes.func.isRequired
}

export default Login