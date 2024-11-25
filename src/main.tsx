import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../index.css'
import './i18n/config.ts'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)