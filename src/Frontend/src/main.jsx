import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CountryContextProvider } from './context/CountryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>,
)
