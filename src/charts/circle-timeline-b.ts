// @ts-expect-error — No types for lib
import { chart } from 'bisonica'
import { select } from 'd3-selection'

export const circleTimelineB = (el: HTMLElement) => {
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    title: { text: 'Circle Timeline' },
    data: {
      values: [
        { Entity: 'A', Year: 1970, Deaths: 4 },
        { Entity: 'A', Year: 1980, Deaths: 2 },
        { Entity: 'A', Year: 1990, Deaths: 16 },
        { Entity: 'B', Year: 1970, Deaths: 21 },
        { Entity: 'B', Year: 1980, Deaths: 26 },
        { Entity: 'B', Year: 1990, Deaths: 5 },
        { Entity: 'C', Year: 1970, Deaths: 13 },
        { Entity: 'C', Year: 1980, Deaths: 11 },
        { Entity: 'C', Year: 1990, Deaths: 6 },
      ],
    },
    width: 600,
    height: 400,
    mark: {
      type: 'circle',
      opacity: 0.8,
      stroke: 'black',
      strokeWidth: 1,
    },
    encoding: {
      x: {
        field: 'Year',
        type: 'temporal',
      },
      y: {
        field: 'Entity',
        type: 'nominal',
        axis: { grid: true },
      },
      size: {
        field: 'Deaths',
        type: 'quantitative',
        title: 'Annual Global Deaths',
        legend: { clipHeight: 30 },
        scale: { rangeMax: 5000 },
      },
      color: { field: 'Entity', type: 'nominal', legend: null },
    },
  }

  const dimensions = { x: 500, y: 500 }
  // eslint-disable-next-line
  const renderer = chart(spec, dimensions)
  // eslint-disable-next-line
  renderer(select(el))
}
