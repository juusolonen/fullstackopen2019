import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
        
    const content = () => parts.map(part =>
        <Part 
        key={part.key}
        part={part}
    /> )
  
  return (
      <>
      {content()}
      </>
  )

}

export default Content