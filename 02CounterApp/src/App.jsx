import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 10;

  const addValue = () => {
    if (counter < 20) counter++;
    setCounter(counter)
  }

  const subValue = () => {
    if (counter > 0) counter--;
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addValue}>+</button>
      <br />
      <br />
      <button onClick={subValue}>-</button>
    </>
  )
}

export default App
