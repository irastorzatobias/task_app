import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import "./App.css";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Papota Shopping",
      day: "Jan 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Clothes Shopping",
      day: "March 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Add task

  const addTask = (task) => {
    //  Generating random id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]) // Copying the task that are already there, but adding newTask.

  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    ); // opposite of reminder
    console.log(id);
  };
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
