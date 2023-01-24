// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const bumpB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Bump' },
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
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
