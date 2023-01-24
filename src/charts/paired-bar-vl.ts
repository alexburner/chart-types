import embed from 'vega-embed'

export const pairedBarVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      values: [
        { category: 'A', group: 'x', value: 0.1 },
        { category: 'A', group: 'y', value: 0.6 },
        { category: 'A', group: 'z', value: 0.9 },
        { category: 'B', group: 'x', value: 0.7 },
        { category: 'B', group: 'y', value: 0.2 },
        { category: 'B', group: 'z', value: 1.1 },
        { category: 'C', group: 'x', value: 0.6 },
        { category: 'C', group: 'y', value: 0.1 },
        { category: 'C', group: 'z', value: 0.2 },
      ],
    },
    mark: 'bar',
    encoding: {
      x: { field: 'category' },
      y: { field: 'value', type: 'quantitative' },
      xOffset: { field: 'group' },
      color: { field: 'group' },
    },
  })
}
