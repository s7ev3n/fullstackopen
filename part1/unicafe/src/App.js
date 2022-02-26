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

const Show = ({text, num}) => {
  return (
    <p>{text}: {num}</p>
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
    return (
      <div>
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive}</p>
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
      <Show text='good' num={good}/>
      <Show text='bad' num={bad}/>
      <Show text='neutral' num={neutral}/>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App