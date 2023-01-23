import { divergingBarB } from './charts/diverging-bar-b'
import { divergingBarVL } from './charts/diverging-bar-vl'
import './style.css'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

switch (document.location.hash) {
  case '#diverging-bar-b':
    divergingBarB(appEl)
    break
  case '#diverging-bar-vl':
    divergingBarVL(appEl)
    break
}
