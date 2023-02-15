import React, {useState, useEffect, useRef} from 'react'

function UseRefHook() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
        <header className="App-header">
            <h1>Changes counter: {renderCount.current}</h1>
            <h2>Previous state: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </header>
    </div>
  )
}

export default UseRefHook