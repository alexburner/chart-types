import 'bisonica/styles.css'
import './style.css'

import { bubbleB } from './charts/bubble-b'
import { bubbleVL } from './charts/bubble-vl'
import { columnLineB } from './charts/column-line-b'
import { columnLineVL } from './charts/column-line-vl'
import { divergingBarB } from './charts/diverging-bar-b'
import { divergingBarVL } from './charts/diverging-bar-vl'
import { lollipopB } from './charts/lollipop-b'
import { lollipopVL } from './charts/lollipop-vl'
import { surplusDefictB } from './charts/surplus-deficit-b'
import { surplusDefictVL } from './charts/surplus-deficit-vl'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

const hash = document.location.hash.substring(1)

document.title = hash || 'chart-types'

switch (hash) {
  case 'diverging-bar-vl':
    divergingBarVL(appEl)
    break
  case 'diverging-bar-b':
    divergingBarB(appEl)
    break
  case 'surplus-deficit-vl':
    surplusDefictVL(appEl)
    break
  case 'surplus-deficit-b':
    surplusDefictB(appEl)
    break
  case 'column-line-vl':
    columnLineVL(appEl)
    break
  case 'column-line-b':
    columnLineB(appEl)
    break
  case 'bubble-vl':
    bubbleVL(appEl)
    break
  case 'bubble-b':
    bubbleB(appEl)
    break
  case 'lollipop-vl':
    lollipopVL(appEl)
    break
  case 'lollipop-b':
    lollipopB(appEl)
    break
  default:
    if (hash.length) {
      appEl.innerHTML = `No switch case for #${hash}`
    }
}
