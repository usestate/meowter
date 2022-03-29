import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './screens'

import reportWebVitals from './reportWebVitals'

const rootNode = document.getElementById('root')

const renderApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(renderApp(), rootNode)

reportWebVitals()
