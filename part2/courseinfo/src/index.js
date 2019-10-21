import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'


/*
const Total = (props) => {
    console.log("This comes from Total " + props.parts[0].exercises)
    return(
    <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    )
}
*/
const App = () => {
    const course = {
    name:    'Half Stack application development',
    parts: [
    {
        name: "Fundamentals of React",
        exercises: 10,
        key: 1
    },
    
     {
        name: 'Using props to pass data',
        exercises: 7,
        key: 2
    },
    
    {
        name: 'State of a component',
        exercises: 14,
        key: 3
     }

    ]
}


    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


