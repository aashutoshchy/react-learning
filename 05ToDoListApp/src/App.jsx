import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container bg-violet-50 mx-auto my-5 rounded-xl py-4 px-3 min-h-[80vh]">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <div className="addTodo">
          <input className='bg-white outline-none px-5 py-2 rounded-l-md' type="text" />
          <button className='bg-violet-800 hover:bg-violet-950 px-5 py-2 text-white rounded-r-md'>Add</button>
        </div>
        <div className=''>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Drink Water!</div>
              <div className="buttons">
                <button className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-white rounded-md mx-2'>Edit</button>
                <button className='bg-violet-800 hover:bg-violet-950 px-2 py-1 text-white rounded-md mx-2'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
