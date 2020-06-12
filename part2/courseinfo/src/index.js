import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'



const App = () => {
    const courses = [
     {
    name:    'Half Stack application development',
    id: 1,
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
},
{
    name: 'Node.js',
    id: 2,
    parts: [
        {
            name:'Routing',
            exercises: 3,
            key: 1
        },
        {
            name: 'Middlewares',
            exercises: 7,
            key: 2
        }
    ]
}

    ]


    return (
        <div>
            <Course courses={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


