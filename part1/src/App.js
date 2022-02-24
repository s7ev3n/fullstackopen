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
      <Part name={props.data[0].name} num={props.data[0].exercises}/>
      <Part name={props.data[1].name} num={props.data[1].exercises}/>
      <Part name={props.data[2].name} num={props.data[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  let total = 0;
  props.data.forEach(part => {
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
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  )
}



export default App
