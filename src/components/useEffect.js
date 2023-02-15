import React, {useState, useEffect} from 'react'
import '../App.css';

function UseEffectHook() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean type')
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
        <header className="App-header">
            <h1>We are looking for: {type}</h1>
            <div className="btnContainer">
            <button className="btn btn-outline-info" onClick={() => setType('users')}>Users</button>
            <button className="btn btn-outline-info" onClick={() => setType('todos')}>Todos</button>
            <button className="btn btn-outline-info" onClick={() => setType('posts')}>Posts</button>
            </div>
            <pre style={{ 
              textDecoration: "none", 
              color: "white", 
              padding: "5px" }}>
              X: {JSON.stringify(pos.x, null, 5)}, 
              Y: {JSON.stringify(pos.y, null, 5)}
              </pre>
            <pre style={{ 
              textDecoration: "none", 
              color: "white", 
              margin: "13px", 
              border: "solid 2px lightblue", 
              padding: "5px" }}>
              {JSON.stringify(data, null, 2)}
            </pre>
        </header>
    </div>
  )
}

export default UseEffectHook