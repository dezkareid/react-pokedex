import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
export default function AppWithRouter (props) {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
