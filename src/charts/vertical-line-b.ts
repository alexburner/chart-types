// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const verticalLineB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Verticl Line' },
    data: {
      values: [
        { year: 1990, value: 8 },
        { year: 1991, value: 5 },
        { year: 1992, value: 2 },
        { year: 1993, value: 4 },
        { year: 1994, value: 1 },
        { year: 1995, value: 10 },
      ],
    },
    mark: 'line',
    encoding: {
      y: { field: 'year', type: 'ordinal' },
      x: {
        field: 'value',
        type: 'quantitative',
        axis: { grid: true },
      },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
