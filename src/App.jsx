import React from 'react'
import './components/clock.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Clock from './components/Clock.jsx'
import Dday from './components/Dday.jsx'

function App() {
  return (
     <div style={{ background: '#f7f7f7', padding: '32px', borderRadius: '16px' }}>
      <Dday />
      <Clock />
   </div>
  )
}

export default App
