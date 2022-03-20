import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

// const phoneBook = [
//   { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ]

// const promise = axios.get('http://localhost:3001/persons').then(
//   response => {
//     // console.log(response)
//     const phoneBook = response.data
//     ReactDOM.render(
//       <App phoneBook={phoneBook}/>,
//       document.getElementById('root')
//     )
// })


ReactDOM.render(<App />, document.getElementById('root'))