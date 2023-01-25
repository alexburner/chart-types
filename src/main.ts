import 'bisonica/styles.css'
import './style.css'

import { barcodeB } from './charts/barcode-b'
import { barcodeVL } from './charts/barcode-vl'
import { boxB } from './charts/box-b'
import { boxVL } from './charts/box-vl'
import { bubbleB } from './charts/bubble-b'
import { bubbleVL } from './charts/bubble-vl'
import { bumpB } from './charts/bump-b'
import { bumpVL } from './charts/bump-vl'
import { candlestickB } from './charts/candlestick-b'
import { candlestickVL } from './charts/candlestick-vl'
import { circleTimelineB } from './charts/circle-timeline-b'
import { circleTimelineVL } from './charts/circle-timeline-vl'
import { columnLineB } from './charts/column-line-b'
import { columnLineVL } from './charts/column-line-vl'
import { divergingBarB } from './charts/diverging-bar-b'
import { divergingBarVL } from './charts/diverging-bar-vl'
import { lollipopB } from './charts/lollipop-b'
import { lollipopVL } from './charts/lollipop-vl'
import { mosaicB } from './charts/mosaic-b'
import { mosaicVL } from './charts/mosaic-vl'
import { pairedBarB } from './charts/paired-bar-b'
import { pairedBarVL } from './charts/paired-bar-vl'
import { priestelyB } from './charts/priestely-b'
import { priestelyVL } from './charts/priestely-vl'
import { projectionB } from './charts/projection-b'
import { projectionVL } from './charts/projection-vl'
import { streamgraphB } from './charts/streamgraph-b'
import { streamgraphVL } from './charts/streamgraph-vl'
import { surplusDefictB } from './charts/surplus-deficit-b'
import { surplusDefictVL } from './charts/surplus-deficit-vl'
import { verticalLineB } from './charts/vertical-line-b'
import { verticalLineVL } from './charts/vertical-line-vl'

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
  case 'bump-vl':
    bumpVL(appEl)
    break
  case 'bump-b':
    bumpB(appEl)
    break
  case 'barcode-vl':
    barcodeVL(appEl)
    break
  case 'barcode-b':
    barcodeB(appEl)
    break
  case 'box-vl':
    boxVL(appEl)
    break
  case 'box-b':
    boxB(appEl)
    break
  case 'candlestick-vl':
    candlestickVL(appEl)
    break
  case 'candlestick-b':
    candlestickB(appEl)
    break
  case 'projection-vl':
    projectionVL(appEl)
    break
  case 'projection-b':
    projectionB(appEl)
    break
  case 'priestely-vl':
    priestelyVL(appEl)
    break
  case 'priestely-b':
    priestelyB(appEl)
    break
  case 'circle-timeline-vl':
    circleTimelineVL(appEl)
    break
  case 'circle-timeline-b':
    circleTimelineB(appEl)
    break
  case 'vertical-line-vl':
    verticalLineVL(appEl)
    break
  case 'vertical-line-b':
    verticalLineB(appEl)
    break
  case 'streamgraph-vl':
    streamgraphVL(appEl)
    break
  case 'streamgraph-b':
    streamgraphB(appEl)
    break
  case 'paired-bar-vl':
    pairedBarVL(appEl)
    break
  case 'paired-bar-b':
    pairedBarB(appEl)
    break
  case 'mosaic-vl':
    mosaicVL(appEl)
    break
  case 'mosaic-b':
    mosaicB(appEl)
    break
  default:
    if (hash.length) {
      appEl.innerHTML = `No switch case for #${hash}`
    }
}
