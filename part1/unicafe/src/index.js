import React from 'react';
import ReactDOM from 'react-dom';

const Jutska = (props) => {
   console.log("props:", props)
    return(
        <>
         <h1>{props.header}</h1><br/>
         <p>{props.para}</p>
         </>
    )
}

const App = () => {
    const juttu = {
    header: "I have a huge penis",
    para: "This was made with ReactJS"
    }
    
    return (
    <>
    <Jutska header={juttu.header} para={juttu.para} />
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


