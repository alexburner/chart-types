import embed from 'vega-embed'

export const columnLineVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
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
        mark: 'bar',
        encoding: {
          x: {
            field: 'a',
            type: 'nominal',
          },
          y: {
            field: 'b',
            type: 'quantitative',
          },
        },
      },
      {
        mark: 'line',
        encoding: {
          x: {
            field: 'a',
            type: 'nominal',
          },
          y: {
            field: 'b',
            type: 'quantitative',
          },
          color: { value: '#e45755' },
        },
      },
    ],
  })
}
