import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ContactsProvider } from './context/ContactsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactsProvider>
    <App />
    </ContactsProvider>
  </BrowserRouter>
)
