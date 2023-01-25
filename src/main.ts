import 'bisonica/styles.css'
import { chartFns } from './chartFns'
import './style.css'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

const currentChartKey = document.location.search.substring(1)

document.title = currentChartKey || 'chart-types'

const chartFn = chartFns[currentChartKey]

if (!chartFn && currentChartKey.length) {
  // 404
  appEl.innerHTML = `No chart for #${currentChartKey}`
} else if (chartFn) {
  // chart
  chartFn(appEl)
} else {
  // index
  const chartKeys = Object.keys(chartFns).sort()
  const ul = document.createElement('ul')
  chartKeys.forEach((chartKey) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = chartKey
    a.href = `?${chartKey}`
    li.appendChild(a)
    ul.appendChild(li)
  })
  appEl.appendChild(ul)
}
