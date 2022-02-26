import React, { useState } from 'react'

const Button = ({handleClick}) => (
  <button onClick={handleClick}>
    next anecdote
  </button>
)

const Vote = ({voteClick}) => (
  <button onClick={voteClick}>
    vote
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxVoteIdx, setmaxVoteIdx] = useState(0)

  const genRandInt = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

  const nextAnecdote = () => {
    const rand = genRandInt(0, anecdotes.length)
    setSelected(rand)
  }

  const voteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    const maxValue = Math.max(...copy)
    const idx = copy.indexOf(maxValue)
    console.log(copy)
    console.log("max value:", maxValue, "max idx:", idx)
    setVotes(copy)
    setmaxVoteIdx(idx)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={nextAnecdote} />
      <Vote voteClick={voteClick} />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[maxVoteIdx]}</p>
      <p>has {votes[maxVoteIdx]} votes</p>
    </div>
  )
}

export default App