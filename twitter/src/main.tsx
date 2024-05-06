import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NormalStyles } from './styled'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <NormalStyles/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)