import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({courses}) => {
    console.log(courses)

    const contents = () => courses.map(course => 
        
        <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} /> 
            <Total parts={course.parts} />
        </div>

    )

    return( 
        <>
        {contents()}
        </>
    )
}

export default Course