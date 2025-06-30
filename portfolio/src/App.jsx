import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/Home.jsx'
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Home />
      </div>
    </div>
  )
}

export default App
