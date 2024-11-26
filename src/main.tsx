import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../index.css'
import './i18n/config.ts'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})

console.log('Main.tsx is executing')

const root = document.getElementById('root')
console.log('Root element:', root)

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  console.log('React app mounted')
} else {
  console.error('Root element not found')
}