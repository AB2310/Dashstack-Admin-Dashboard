import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/todo.css";  // Make sure to create this CSS file for styling
import { PiStarLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";   

const ToDoPage = () => {
  // Dummy data for To-Do list
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting with CEO", isCompleted: false, isStarred: false },
    { id: 2, text: "Pick up kids from school", isCompleted: false, isStarred: false },
    { id: 3, text: "Shopping with Brother", isCompleted: false, isStarred: false },
    { id: 4, text: "Review with HR", isCompleted: false, isStarred: false },
    { id: 5, text: "Going to Dia’s School", isCompleted: false, isStarred: false },
    { id: 6, text: "Check design files", isCompleted: false, isStarred: false },
    { id: 7, text: "Update File", isCompleted: false, isStarred: false }
  ]);

  const [newTask, setNewTask] = useState("");

  const handleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleStarTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isStarred: !task.isStarred } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    if (newTask) {
      setTasks([ 
        ...tasks, 
        { id: tasks.length + 1, text: newTask, isCompleted: false, isStarred: false } 
      ]);
      setNewTask("");
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`todo-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        {/* Navbar Component */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* To-Do List Title */}
        <h1 className="todo-title">To-Do List</h1>

        {/* Add New Task Section */}
        <div className="add-task-container">
          <input
            type="text"
            placeholder="Enter new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="task-input"
          />
          <button className="add-task-btn" onClick={handleAddTask}>Add New Task</button>
        </div>

        {/* Tasks List */}
        <div className="todo-list">
          {tasks.map((task) => (
            <div key={task.id} className={`task ${task.isCompleted ? "completed" : ""}`}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleTaskCompletion(task.id)}
                className="task-checkbox"
              />
              <span className={`task-text ${task.isCompleted ? "task-done" : ""}`}>
                {task.text}
              </span>
              <button
                onClick={() => handleStarTask(task.id)}
                className={`task-star ${task.isStarred ? "starred" : ""}`}
              >
                <PiStarLight />
              </button>
              <button onClick={() => handleDeleteTask(task.id)} className="task-delete">
                <i className="trash-icon"><MdOutlineCancel /></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
