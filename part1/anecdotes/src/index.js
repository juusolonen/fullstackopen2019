import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [testi, setTesti] = useState(Array.apply(null, {length: 6}).map(function() {return 0;}))
  const [counter, setCounter] = useState(0)
  const [most, setMost] = useState(0)

  const vote = () => {
    setCounter(counter + 1)
    const copy = [...testi]
    copy[selected] += 1
    setTesti(copy)

    if(testi[selected] > most) {
      setMost(selected)
    }
    }

    const MostVotes = (props) => {
      if(counter < 1) {
      return(<div>
        No votes have been given yet
        </div>
      )
      }else{
        return(
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{props.anecdotes[most]}</p>
        </div>)
      }
    }

  return (
    <div>
      <h1>Anecdote of the day</h1><br/>
      {props.anecdotes[selected]}
      <p>has {testi[selected]} votes</p>
      
    <br/>
      
      <Button onclick={() => setSelected(Math.floor(Math.random() * 6)) } text="next anecdote" />
      <Button onclick={() => vote()} text="vote" />
      <MostVotes anecdotes = {anecdotes} />
    
    
    </div>
    
    
    
    
  )
}

const anecdotes= [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]






const Button = (props) => (
    
    <>
    <button onClick={props.onclick}>
        {props.text}
    </button>
    </>
)


    


ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)