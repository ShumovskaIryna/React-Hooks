import React from 'react'
import '../App.css';
import Alert from './useContext/Alert';
import Main from './useContext/Main'
import { AlertProvider } from './useContext/AlertContext';

function UseContextHook() {
  
  return ( 
    <div>
      <AlertProvider>
        <header className="App-header">
          <Alert/>
          <Main toggle={() => {}}/>
        </header>
      </AlertProvider>
    </div>
  )
}

export default UseContextHook