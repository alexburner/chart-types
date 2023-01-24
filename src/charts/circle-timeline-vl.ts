import embed from 'vega-embed'

export const circleTimelineVL = (el: HTMLElement) => {
  void embed(el, {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
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
  })
}
