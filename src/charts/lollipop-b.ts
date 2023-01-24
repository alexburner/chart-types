// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const lollipopB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Lollipop' },
    data: {
      values: [
        { a: 'A', b: 28 },
        { a: 'B', b: 55 },
        { a: 'C', b: 33 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: 19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
      ],
    },
    layer: [
      {
        mark: 'rule',
        encoding: {
          y: {
            field: 'a',
            type: 'nominal',
          },
          x: {
            field: 'b',
            type: 'quantitative',
          },
        },
      },
      {
        mark: 'point',
        encoding: {
          y: {
            field: 'a',
            type: 'nominal',
          },
          x: {
            field: 'b',
            type: 'quantitative',
          },
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
