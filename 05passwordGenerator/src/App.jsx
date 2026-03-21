import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passowrd, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWQYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*=+-/~`"

    for (let i = 0; i < length; i++) {
      let randNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt[i]
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-[50%] my-20 py-5 m-auto h-auto shadow-md rounded-2xl text-orange-600 bg-yellow-200 flex flex-wrap items-center justify-center gap-1'>
        <h1 className='text-2xl p-2 text-center font-[Poppins] font-medium'>Passowrd Generator</h1>
        <input className='w-[80%] h-10 bg-amber-50 px-5 py-2 outline-none rounded-2xl' type="text" placeholder='Password' readOnly />
        <button className='px-3 py-0.5 h-10 bg-amber-600 outline-none rounded-2xl text-white shadow-black-2xl'>Copy</button>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <label>Length {length}</label>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          </div>
        </div>
        <div className='flex text-sm gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex text-sm gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="charInput">Numbers</label>
        </div>
      </div>
    </>
  )
}

export default App
