import { useState } from 'react'
import Preloader from './components/Preloader'
import MainUI from './components/MainUI'

export default function App() {
  const [isCaptured, setIsCaptured] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Preloader */}
      <Preloader onCapture={() => setIsCaptured(true)} />

      {/* Main Website UI that prints down like a Polaroid */}
      <MainUI isVisible={isCaptured} />
    </div>
  )
}
