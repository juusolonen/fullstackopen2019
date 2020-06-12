import React from 'react'
const Message = ({ title, error}) => {

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


export default Message