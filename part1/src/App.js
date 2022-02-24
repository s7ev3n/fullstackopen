import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} has {props.num} exercises.
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} num={props.part1.exercises1}/>
      <Part name={props.part2.name} num={props.part2.exercises2}/>
      <Part name={props.part3.name} num={props.part3.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  const total = props.part1.exercises + props.part2.exercises + props.part3.exercises;
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course  = 'Half Stack application development';
  const part1 = {
    name: 'Fundamental of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}



export default App
