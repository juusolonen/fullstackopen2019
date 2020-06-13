/* eslint-disable linebreak-style */
import React from 'react'
import propTypes from 'prop-types'

const Message = ({ title, error }) => {

  if(!error) {
    return (
      <div  className="message">
        <p>a new blog {title} added</p>
      </div>
    )
  }

  if(!title) {
    return (
      <div  className="error">
        <p>wrong username or password</p>
      </div>
    )
  }

}

Message.propTypes = {
  title: propTypes.string,
  error: propTypes.string
}


export default Message