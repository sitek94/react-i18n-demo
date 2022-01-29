import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './app'

import { initI18n } from './i18n'

initI18n()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
