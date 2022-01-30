import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { OverlaySpinner } from 'components/spinner'

import { App } from './app'
import { initI18n } from './i18n'

initI18n()

ReactDOM.render(
  <React.Suspense fallback={<OverlaySpinner />}>
    <App /> ,
  </React.Suspense>,
  document.getElementById('root')
)
