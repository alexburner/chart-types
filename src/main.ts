import 'bisonica/styles.css'
import { chartFns } from './chartFns'
import './style.css'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

const locationHash = document.location.hash.substring(1)

document.title = locationHash || 'chart-types'

const chartFn = chartFns[locationHash]

if (!chartFn && locationHash.length) {
  // 404
  appEl.innerHTML = `No chart for #${locationHash}`
} else if (chartFn) {
  // chart
  chartFn(appEl)
} else {
  // index
  const chartHashes = Object.keys(chartFns).sort()
  const ul = document.createElement('ul')
  chartHashes.forEach((chartHash) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = chartHash
    a.href = `/#${chartHash}`
    li.appendChild(a)
    ul.appendChild(li)
  })
  appEl.appendChild(ul)
}
