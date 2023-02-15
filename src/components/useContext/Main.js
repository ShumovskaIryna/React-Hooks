import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {
  const { toggle } = useAlert()
  return (
    <>
      <h1>Hello in example useContext</h1>
      <button 
        onClick = {toggle}
        className="btn btn-success">
          Show alert
      </button>
    </>
  )
}