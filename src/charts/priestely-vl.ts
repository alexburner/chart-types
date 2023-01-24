import embed from 'vega-embed'

export const priestelyVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
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
  })
}
