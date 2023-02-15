import React, {useState, useCallback} from 'react'
import '../App.css';
import ItemsList from './ItemsList'

function UseCallbackHook() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(8)

  const styles = {
    color: colored ? 'lightgreen' : 'lightblue'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <div>
      <header className="App-header">
      <h1 style={styles}>Counter: {count}</h1>
        <div className="btnContainer">
          <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Add</button>
          <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change color</button>
        </div>
        <ItemsList getItems={generateItemsFromAPI}/>
      </header>
    </div>
  )
}

export default UseCallbackHook