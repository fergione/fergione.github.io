import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Scaffold from './Scaffold.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Scaffold />
  </StrictMode>,
)
