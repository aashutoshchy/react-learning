import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const handleChange = (e) => {
    setLength(e.target.value);
  }

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // highlight when copying
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white rounded-b-lg" placeholder="Password" readOnly ref={passwordRef} />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={handleChange} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} id="charInput" />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
