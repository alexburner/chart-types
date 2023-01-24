// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'
import { ohlc } from '../data/ohlc'

export const candlestickB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Box' },
    data: { values: ohlc },
    encoding: {
      x: {
        field: 'date',
        type: 'temporal',
        title: 'Date in 2009',
        axis: {
          format: '%m/%d',
          labelAngle: -45,
          title: 'Date in 2009',
        },
      },
      y: {
        type: 'quantitative',
        scale: { zero: false },
        axis: { title: 'Price' },
      },
      // color: {
      //   condition: {
      //     test: 'datum.open < datum.close',
      //     value: '#06982d',
      //   },
      //   value: '#ae1325',
      // },
    },
    layer: [
      {
        mark: 'rule',
        encoding: {
          y: { field: 'low', type: 'quantitative' },
          y2: { field: 'high', type: 'quantitative' },
        },
      },
      {
        mark: 'bar',
        encoding: {
          y: { field: 'open', type: 'quantitative' },
          y2: { field: 'close', type: 'quantitative' },
        },
      },
    ],
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
