// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'
import { penguins } from '../data/penguins'

export const boxB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Box' },
    data: { values: penguins },
    mark: {
      type: 'boxplot',
      extent: 'min-max',
    },
    encoding: {
      x: { field: 'Species', type: 'nominal' },
      color: { field: 'Species', type: 'nominal', legend: null },
      y: {
        field: 'Body Mass (g)',
        type: 'quantitative',
        scale: { zero: false },
      },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
