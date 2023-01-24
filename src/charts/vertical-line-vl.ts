import embed from 'vega-embed'

export const verticalLineVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      values: [
        { year: 1990, value: 8 },
        { year: 1991, value: 5 },
        { year: 1992, value: 2 },
        { year: 1993, value: 4 },
        { year: 1994, value: 1 },
        { year: 1995, value: 10 },
      ],
    },
    mark: 'line',
    encoding: {
      y: { field: 'year', type: 'ordinal' },
      x: { field: 'value', type: 'quantitative' },
    },
  })
}
