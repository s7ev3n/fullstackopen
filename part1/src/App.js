import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
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
  const parts = props.course.parts;
  return (
    <div>
      <Part name={parts[0].name} num={parts[0].exercises}/>
      <Part name={parts[1].name} num={parts[1].exercises}/>
      <Part name={parts[2].name} num={parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  let total = 0;
  props.course.parts.forEach(part => {
    // console.log(part.name, part.exercises)
    total = total + part.exercises
  })
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}



export default App
