import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'
import { initI18n } from './i18n'

initI18n()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
