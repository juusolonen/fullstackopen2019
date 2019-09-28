import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    console.log(props.course)
    return(
       <h1>{props.course}</h1> 
    )
}

const Part = (props) => {
    console.log("part: " + props.part.name + " " + props.part.exercises)
    return (
        <>
        <p>{props.part.name} {props.part.exercises} </p>
        </>
    )
}

const Content = (props) => {
    console.log("content: " + props.parts[0].name)
    return(
<div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
</div>
    )
}

const Total = (props) => {
    console.log("This comes from Total " + props.parts[0].exercises)
    return(
    <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    )
}
const App = () => {
    const course = {
    name:    'Half Stack application development',
    parts: [
    {
        name: "Fundamentals of React",
        exercises: 10
    },
    
     {
        name: 'Using props to pass data',
        exercises: 7
    },
    
    {
        name: 'State of a component',
        exercises: 14
     }
    ]
}


    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


