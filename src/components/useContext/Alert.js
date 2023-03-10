import React from 'react'
import { useAlert }  from './AlertContext'

export default function Alert() {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div className="alert alert-info" 
    onClick={alert.toggle}
    >
      💋 Thanks for flowers ❤️
    </div>
  )
}