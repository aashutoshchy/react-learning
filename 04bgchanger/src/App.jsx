import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-150' style={{ backgroundColor: color }}>
        <div className='h-full fixed flex flex-wrap justify-center items-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{ backgroundColor: "Red" }}>Red</button>
            <button onClick={() => setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{ backgroundColor: "Green" }}>Green</button>
            <button onClick={() => setColor("Blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{ backgroundColor: "Blue" }}>Blue</button>
            <button onClick={() => setColor("Yellow")} className='bg-amber-300 outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'>Yellow</button>
            <button onClick={() => setColor("Olive")} className='bg-olive-300 outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'>Olive</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
