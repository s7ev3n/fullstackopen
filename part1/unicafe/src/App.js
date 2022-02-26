import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = good / all
  if (all == 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />    
        <StatisticLine text="all" value = {all} />
        <StatisticLine text="average" value = {average} />
        <StatisticLine text="positive" value = {positive} /> 
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App