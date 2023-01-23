import embed from 'vega-embed'

export const surplusDefictVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
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
    width: 300,
    height: 200,
    mark: 'area',
    encoding: {
      x: {
        field: 'a',
        type: 'nominal',
        axis: {
          domain: false,
          ticks: false,
          labelAngle: 0,
          labelPadding: 4,
        },
      },
      y: {
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
  })
}
