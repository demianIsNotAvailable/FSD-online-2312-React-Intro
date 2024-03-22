import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let cuenta = 0
  const addCountButtonHandler = () => {
    cuenta ++
    console.log(cuenta)

  }

  // este es un comentario de ejemplo para tener algún cambio y poder comitearlo
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => addCountButtonHandler()}>
          count is {cuenta}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// useState = (estado inicial de la variable) => {
  // return [estado inicial de la variable, función que actualiza el estado ]
// }