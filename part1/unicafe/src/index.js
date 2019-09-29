import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { tsPropertySignature } from '@babel/types'

const Header = () => <h1>give feedback</h1>
const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
const Stats = () => <h1>statistics</h1>

const Statistic = (props) => {
    return (
        <>
        <p>{props.text} {props.value}</p> 
        </>
    )
}

const Statistics = (props) => {
    if(props.all === 0) {
        return (
            <>
            <p>No feedback given</p>
            </>
        )
    }
    return(
        <>
    <Statistic text="good" value={props.good} />
    <Statistic text="neutral" value={props.neutral} />
    <Statistic text="bad" value={props.bad} />
    <Statistic text="all" value={props.all} />
    <Statistic text="average" value={props.average} />
    <Statistic text="positive" value={props.positive} />
    </>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good + (0 * neutral) + ((-1) * bad)) / (good + neutral + bad)
  const positive = (good / (good + neutral + bad))*100 + " %"
  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Stats />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)