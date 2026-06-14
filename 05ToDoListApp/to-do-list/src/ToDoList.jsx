import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Drink Water"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
        }
        setNewTask("")
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i != index)
        setTasks(updatedTasks)
    }

    return (
        <div className="">
            <h1 className="text-center">To Do List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} className="outline-1" />
                <button className="px-2 outline-1 ml-1" onClick={addTask}>Add</button>
            </div>

            <ol>
                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <span>{task}</span>
                            <button className="px-2 outline-1 ml-1" onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default ToDoList