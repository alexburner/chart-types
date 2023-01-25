// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const pictogramB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Pictogram' },
    data: {
      values: [
        { x: 0.5, y: 0.5, img: '/ffox.png' },
        { x: 1.5, y: 1.5, img: '/gimp.png' },
        { x: 2.5, y: 2.5, img: '/7zip.png' },
      ],
    },
    mark: { type: 'image', width: 50, height: 50 },
    encoding: {
      x: { field: 'x', type: 'quantitative' },
      y: { field: 'y', type: 'quantitative' },
      url: { field: 'img', type: 'nominal' },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
