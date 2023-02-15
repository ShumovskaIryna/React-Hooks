import React, {useState, useMemo, useEffect} from 'react'
import '../App.css';

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function UseMemoHook() {
  const [number, setNumber] = useState(8)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'lightgreen' : 'lightblue'
  }), [colored])
  
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])
  
    useEffect(() => {
      console.log('Styles changed')
    }, [styles])

  return (
    <div>
      <header className="App-header">
        <h1 style={styles}>Counter: {computed}</h1>
        <div className="btnContainer">
          <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
          <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Remove</button>
          <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change color</button>
        </div>
      </header>
    </div>
  )
}

export default UseMemoHook
