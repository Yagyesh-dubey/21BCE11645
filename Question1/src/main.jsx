import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Prime from './components/Prime';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Prime/>
  </StrictMode>,
)
