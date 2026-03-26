import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleAdd = () => {
    setTodos(...todos, { todo, isCompleted: false })
    setTodo("")
    console.log(todos)
  }

  const handleChange = () => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-50 mx-auto my-5 rounded-xl py-4 px-3 min-h-[80vh]">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <div className="addTodo my-5">
          <input onChange={handleChange} className='bg-white outline-none px-5 py-2 rounded-l-md w-2/4' type="text" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 px-5 py-2 text-white rounded-r-md'>Add</button>
        </div>
        <div className=''>
          <h2 className='text-lg font-bold'>{todo}</h2>
          <div className="todos">
            {todos.map((item) => {
              <div className="todo flex" >
                <div className="text">{item.todo}</div>
                <div className="buttons">
                  <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-white rounded-md mx-2'>Edit</button>
                  <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 px-2 py-1 text-white rounded-md mx-2'>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div >
    </>
  )
}

export default App
