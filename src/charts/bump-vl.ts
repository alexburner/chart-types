import embed from 'vega-embed'

export const bumpVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Bump chart',
    data: {
      values: [
        { build: 1, result: 'PASSED' },
        { build: 2, result: 'PASSED' },
        { build: 3, result: 'FAILED' },
        { build: 4, result: 'FAILED' },
        { build: 5, result: 'SKIPPED' },
        { build: 6, result: 'PASSED' },
        { build: 7, result: 'PASSED' },
        { build: 8, result: 'FAILED' },
        { build: 9, result: 'PASSED' },
        { build: 10, result: 'PASSED' },
        { build: 11, result: 'SKIPPED' },
        { build: 12, result: 'PASSED' },
        { build: 13, result: 'PASSED' },
        { build: 14, result: 'FAILED' },
        { build: 15, result: 'PASSED' },
        { build: 16, result: 'SKIPPED' },
      ],
    },
    mark: { type: 'line', point: true },
    encoding: {
      x: { field: 'build', type: 'quantitative' },
      y: { field: 'result', type: 'nominal' },
      order: { field: 'build', type: 'quantitative' },
    },
  })
}
