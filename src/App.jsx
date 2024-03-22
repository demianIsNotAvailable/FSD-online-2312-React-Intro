import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputData, setInputData] = useState("")

  const addCountButtonHandler = () => {
    setCount(count + 1)
  }

  const inputHandler = (event) => {
    setInputData(event.target.value)
    console.log(inputData, "yo soy input data")
  }

  const logearInputData = () => {
    console.log(inputData)
  }

  useEffect(() => {
    console.log(count)
  }, [count])

  useEffect(
    logearInputData
    , [inputData, count])

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Este es el subtítulo</h2>
      <div className="card">
        <button onClick={addCountButtonHandler}>
          count is {count}
        </button>
        <input type="text" name="inputDePrueba" onChange={(event) => inputHandler(event)}></input>
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