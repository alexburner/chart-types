// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const priestelyB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Priestely' },
    data: {
      values: [
        { task: 'A', start: 1, end: 4 },
        { task: 'B', start: 3, end: 9 },
        { task: 'C', start: 8, end: 10 },
      ],
    },
    mark: 'bar',
    encoding: {
      y: { field: 'task', type: 'ordinal' },
      x: { field: 'start', type: 'quantitative' },
      x2: { field: 'end' },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
