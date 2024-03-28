import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import BodyBox from './components/BodyBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimarySearchAppBar />
      <BodyBox />
    </>
  )
}

export default App
