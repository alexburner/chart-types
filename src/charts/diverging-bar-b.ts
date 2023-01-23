// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const divergingBarB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Diverging Bar' },
    description:
      'A bar chart with negative values. We can hide the axis domain line, and instead use a conditional grid color to draw a zero baseline.',
    data: {
      values: [
        { a: 'A', b: -28 },
        { a: 'B', b: 55 },
        { a: 'C', b: -33 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: -19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
      ],
    },
    mark: 'bar',
    encoding: {
      y: {
        field: 'a',
        type: 'nominal',
        axis: {
          domain: false,
          ticks: false,
          labelAngle: 0,
          labelPadding: 4,
        },
      },
      x: {
        field: 'b',
        type: 'quantitative',
        axis: {
          gridColor: {
            condition: { test: 'datum.value === 0', value: 'black' },
            value: '#ddd',
          },
        },
      },
    },
  }

  const dimensions = { x: 500, y: 500 }

  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)

  // eslint-disable-next-line
  renderer(select(el))
}
