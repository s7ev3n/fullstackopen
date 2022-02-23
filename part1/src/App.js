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
      <Part name={props.name1} num={props.num1}/>
      <Part name={props.name2} num={props.num2}/>
      <Part name={props.name3} num={props.num3}/>
    </div>
  )
}

const Total = (props) => {
  const total = props.exer1_num + props.exer2_num + props.exer3_num;
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} name2={part2} name3={part3} num1={exercises1} num2={exercises2} num3={exercises3} />
      <Total exer1_num={exercises1} exer2_num={exercises2} exer3_num={exercises3}/>
    </div>
  )
}



export default App
