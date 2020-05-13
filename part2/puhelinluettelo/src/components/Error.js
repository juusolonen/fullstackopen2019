import React from 'react'

const Error = ({error}) => {

    const style = {
        fontSize: 50,
        color: 'red',
        backgroundColor: 'gray',
        border: '10px solid',
        borderColor: 'red',
        textAlign: 'center'
    }

    if (error === '') {
        
        return null
    }

    return (
        <div style={style}>
            {error}
        </div>
    )
}

export default Error