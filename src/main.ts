import './style.css'

const appEl = document.getElementById('app')
if (!appEl) throw new Error('Missing #app')

appEl.innerHTML = 'Hello World'
