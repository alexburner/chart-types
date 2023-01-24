import embed from 'vega-embed'
import { unemployment } from '../data/unemployment'

export const streamgraphVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 300,
    height: 200,
    data: { values: unemployment },
    mark: 'area',
    encoding: {
      x: {
        timeUnit: 'yearmonth',
        field: 'date',
        axis: { domain: false, format: '%Y', tickSize: 0 },
      },
      y: {
        aggregate: 'sum',
        field: 'count',
        axis: null,
        stack: 'center',
      },
      color: { field: 'series', scale: { scheme: 'category20b' } },
    },
  })
}
