// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const projectionB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Projection' },
    data: {
      values: [
        {
          ci1: 23.5007,
          ci0: 19.6912,
          center: 21.5735,
          Year: 189302400000,
        },
        {
          ci1: 25.8214,
          ci0: 20.8554,
          center: 23.375,
          Year: 220924800000,
        },
        {
          ci1: 26.4472,
          ci0: 21.9749,
          center: 24.0611,
          Year: 252460800000,
        },
        {
          ci1: 27.7074,
          ci0: 22.6203,
          center: 25.0931,
          Year: 283996800000,
        },
      ],
    },
    layer: [
      {
        mark: 'errorband',
        encoding: {
          y: {
            field: 'ci1',
            type: 'quantitative',
            scale: { zero: false },
            title: 'Mean of Miles per Gallon (95% CIs)',
          },
          y2: { field: 'ci0', type: 'quantitative' },
          x: {
            field: 'Year',
            type: 'quantitative',
          },
        },
      },
      {
        mark: 'line',
        encoding: {
          y: {
            field: 'center',
            type: 'quantitative',
          },
          x: {
            field: 'Year',
            type: 'quantitative',
          },
        },
      },
    ],
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
