import React from 'react'

const Message = ({message}) => {

    const style = {
        fontSize: 50,
        color: 'green',
        backgroundColor: 'gray',
        border: '10px solid',
        borderColor: 'green',
        textAlign: 'center'
    }

    if (message === '') {
        
        return null
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Message