import embed from 'vega-embed'
import { penguins } from '../data/penguins'

export const boxVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description:
      'A vertical box plot showing median, min, and max body mass of penguins.',
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
  })
}
