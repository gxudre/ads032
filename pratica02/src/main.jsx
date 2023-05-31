import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContatosContactProvider } from './contexts/ContatosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContatosContactProvider>
    <App />
    </ContatosContactProvider>
  </React.StrictMode>,
)
