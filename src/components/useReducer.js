import React from 'react'
import '../App.css';
import Alert from './useReducer/Alert';
import Main from './useReducer/Main'
import { AlertProvider } from './useReducer/AlertContext';

function UseReducerHook() {
  
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

export default UseReducerHook