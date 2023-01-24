// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'
import { unemployment } from '../data/unemployment'

export const streamgraphB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Verticl Line' },
    data: { values: unemployment },
    mark: 'area',
    encoding: {
      x: {
        timeUnit: 'yearmonth',
        field: 'date',
        axis: { domain: false, format: '%Y', tickSize: 0 },
      },
      y: {
        field: 'count',
        axis: null,
        stack: 'center',
      },
      // color: { field: 'series', scale: { scheme: 'category20b' } },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
