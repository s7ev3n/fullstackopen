import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/mluukkai">mluukkai</a>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
    {props.partname} has {props.num_exer} exercises.
    </p>
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
      <Content partname={part1} num_exer={exercises1}/>
      <Content partname={part2} num_exer={exercises2}/>
      <Content partname={part3} num_exer={exercises3}/>
      <Total exer1_num={exercises1} exer2_num={exercises2} exer3_num={exercises3}/>
    </div>
  )
}



export default App
