import embed from 'vega-embed'

export const bubbleVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      values: [
        { a: 31, b: 28 },
        { a: 2, b: 55 },
        { a: 9, b: 33 },
        { a: 5, b: 91 },
        { a: 43, b: 81 },
        { a: 22, b: 53 },
        { a: 87, b: 19 },
        { a: 12, b: 87 },
        { a: 1, b: 52 },
      ],
    },
    mark: 'point',
    encoding: {
      x: { field: 'a', type: 'quantitative' },
      y: { field: 'b', type: 'quantitative' },
      size: { field: 'a', type: 'quantitative' },
    },
  })
}
