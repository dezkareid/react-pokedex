import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './AppWithRouter'

const appElement = document.getElementById('app-element')

render(<App />, appElement)
