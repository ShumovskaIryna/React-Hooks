import React, {useState} from 'react'
import '../App.css';

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

function UseStateHook() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })
  const [state, setState] = useState({
    title: 'Cat',
    date: Date.now()
  })

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Now I`m Panda!'
      }
    })
  }

  return (
    <div>
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <div className="btnContainer">
          <button onClick={increment} className="btn btn-success">Plus</button>
          <button onClick={decrement} className="btn btn-danger">Minus</button>
          <button onClick={updateTitle} className="btn btn-info">Change name</button>
        </div>
        <pre  style={{ 
          textDecoration: "none", 
          color: "white", 
          margin: "13px", 
          border: "solid 2px lightblue", 
          padding: "5px" }}>
          {JSON.stringify(state.title, null, 2)}
        </pre>
      </header>
    </div>
  )
}

export default UseStateHook