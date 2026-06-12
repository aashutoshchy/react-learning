import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(["Eat", "Drink"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") setTasks(t => [...t, newTask])
    setNewTask("")
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [[index], [index - 1]]
    }
  }

  function moveTaskDown(index) {

  }

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <div>
          <input type="text" placeholder='Enter a Task' value={newTask} onChange={handleInputChange} />
          <button onClick={() => addTask()}>Add</button>
        </div>
        <ol>
          {
            tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => moveTaskUp(index)}>⬆️</button>
                <button onClick={() => moveTaskDown(index)}>⬇️</button>
              </li>
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default App
