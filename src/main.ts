import 'bisonica/styles.css'
import './style.css'

import { columnLineB } from './charts/column-line-b'
import { columnLineVL } from './charts/column-line-vl'
import { divergingBarB } from './charts/diverging-bar-b'
import { divergingBarVL } from './charts/diverging-bar-vl'
import { surplusDefictB } from './charts/surplus-deficit-b'
import { surplusDefictVL } from './charts/surplus-deficit-vl'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

document.title = document.location.hash.substring(1) || 'chart-types'

switch (document.location.hash) {
  case '#diverging-bar-vl':
    divergingBarVL(appEl)
    break
  case '#diverging-bar-b':
    divergingBarB(appEl)
    break
  case '#surplus-deficit-vl':
    surplusDefictVL(appEl)
    break
  case '#surplus-deficit-b':
    surplusDefictB(appEl)
    break
  case '#column-line-vl':
    columnLineVL(appEl)
    break
  case '#column-line-b':
    columnLineB(appEl)
    break
  default:
    if (document.location.hash.length > 1) {
      alert(`No case for "${document.location.hash}"`)
    }
}
