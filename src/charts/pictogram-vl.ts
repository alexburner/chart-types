import embed from 'vega-embed'

export const pictogramVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
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
  })
}
