import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {
  const { show } = useAlert()
  return (
    <>
      <h1>Hello in example useReducer</h1>
      <button 
        onClick = {()=>show('💋 Thanks for flowers and candies ❤️')}
        className="btn btn-success">
          Show alert
      </button>
    </>
  )
}