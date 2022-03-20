import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Show = ({person}) => {
  return (
    <li>{person.name} : {person.number}</li>
  )
}

const Persons = ({ persons }) => {
  return (
    <div> 
      <ul>
        {persons.map(person => 
          <Show key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

const PersonForm = ({submitFunc, nameState, nameFunc, numState, numFunc}) => {
  return (
      <form onSubmit={submitFunc}>
      <div>
          name: <input value={nameState} onChange={nameFunc}/>
      </div>
      <div>
          number: <input value={numState} onChange={numFunc} />
      </div>
      <div>
          <button type="submit">add</button>
      </div>
      </form>
  )
}

const Filter = ({filterState, filterFunc, showArray}) => {
  return (
    <div>
      filter shown with: <input value={filterState} onChange={filterFunc}/>
      <p>Current filter: {filterState}</p>
      <Persons persons={showArray}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personToShow, setPersonToShow] = useState([])

  useEffect(() => {
    console.log('effect')
    const eventHandler = resopnse => {
      console.log('promise fulfilled')
      setPersons(resopnse.data)
    }
    axios
      .get('http://localhost:3001/persons')
      .then(eventHandler)
  }, [])
  console.log('render', persons.length, 'persons')

  const addContact = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    const index = names.indexOf(newName)    

    if (index === -1) {
      console.log('${newName} is not in the phonebook')
      const contactObject = {
        name : newName,
        number : newNumber,
        id : persons.length + 1
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleBookChange = (event) => {
		setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setPersonToShow(persons.filter(
      person => person.name.toLowerCase().startsWith(
        event.target.value.toLowerCase()
      )
    ))
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterState={filter} filterFunc={handleFilter} 
                showArray={personToShow}/>
      <h2>add a new</h2>
        <PersonForm submitFunc={addContact} nameState={newName} 
                  nameFunc={handleBookChange} numState={newNumber}
                  numFunc={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons persons={persons}/>
    </div>
  )
}

export default App