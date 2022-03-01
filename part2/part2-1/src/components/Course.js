import React from 'react'

const Header = ({text}) => {
    return (
        <h1>
            {text}
        </h1>
    )
}

const Part = ({part}) => {
    return (
        <p>
            {part.name} has {part.exercises} exercises.
        </p>
    )
}

const Total = ({parts}) => {
    const init = 0
    const total = parts.reduce(
        (acc, cur) => acc + cur.exercises,
        init);

    return (
        <p>
            total of {total} exercises.
        </p>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course