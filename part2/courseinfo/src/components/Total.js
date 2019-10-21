import React from 'react'


const Total = ({parts}) => {
   // console.log("This comes from Total " ,parts)

    const total = () => parts.reduce((sum, part) =>{
        return sum + part.exercises
    },0)

    return(
    <>
    <b>Number of exercises {total()}</b>
    </>
    )
}

export default Total