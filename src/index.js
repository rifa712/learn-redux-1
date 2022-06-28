import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// Importing Redux
import { store } from './app/store'
import { Provider } from 'react-redux'

// Store -> Global State

// Action

// Reducer

// Dispatch

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
