import { barcodeB } from './charts/barcode-b'
import { barcodeVL } from './charts/barcode-vl'
import { boxB } from './charts/box-b'
import { boxVL } from './charts/box-vl'
import { bubbleB } from './charts/bubble-b'
import { bubbleVL } from './charts/bubble-vl'
import { bulletB } from './charts/bullet-b'
import { bulletVL } from './charts/bullet-vl'
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
import { pictogramB } from './charts/pictogram-b'
import { pictogramVL } from './charts/pictogram-vl'
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
import { waterfallB } from './charts/waterfall-b'
import { waterfallVL } from './charts/waterfall-vl'

export const chartFns: Record<string, (el: HTMLElement) => void> = {
  'diverging-bar-vl': divergingBarVL,
  'diverging-bar-b': divergingBarB,
  'surplus-deficit-vl': surplusDefictVL,
  'surplus-deficit-b': surplusDefictB,
  'column-line-vl': columnLineVL,
  'column-line-b': columnLineB,
  'bubble-vl': bubbleVL,
  'bubble-b': bubbleB,
  'lollipop-vl': lollipopVL,
  'lollipop-b': lollipopB,
  'bump-vl': bumpVL,
  'bump-b': bumpB,
  'barcode-vl': barcodeVL,
  'barcode-b': barcodeB,
  'box-vl': boxVL,
  'box-b': boxB,
  'candlestick-vl': candlestickVL,
  'candlestick-b': candlestickB,
  'projection-vl': projectionVL,
  'projection-b': projectionB,
  'priestely-vl': priestelyVL,
  'priestely-b': priestelyB,
  'circle-timeline-vl': circleTimelineVL,
  'circle-timeline-b': circleTimelineB,
  'vertical-line-vl': verticalLineVL,
  'vertical-line-b': verticalLineB,
  'streamgraph-vl': streamgraphVL,
  'streamgraph-b': streamgraphB,
  'paired-bar-vl': pairedBarVL,
  'paired-bar-b': pairedBarB,
  'mosaic-vl': mosaicVL,
  'mosaic-b': mosaicB,
  'pictogram-vl': pictogramVL,
  'pictogram-b': pictogramB,
  'bullet-vl': bulletVL,
  'bullet-b': bulletB,
  'waterfall-vl': waterfallVL,
  'waterfall-b': waterfallB,
}
