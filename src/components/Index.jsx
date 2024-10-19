import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../utils/localStorageUtils";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

        <TaskForm addTask={addTask} />
        <div className="flex justify-center my-4 space-x-3">
          <button onClick={() => setFilter("all")} className={`py-2 px-4 rounded-lg ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"} hover:bg-blue-600 transition duration-200`}>
            All
          </button>
          <button onClick={() => setFilter("pending")} className={`py-2 px-4 rounded-lg ${filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-300"} hover:bg-yellow-600 transition duration-200`}>
            Pending
          </button>
          <button onClick={() => setFilter("completed")} className={`py-2 px-4 rounded-lg ${filter === "completed" ? "bg-green-500 text-white" : "bg-gray-300"} hover:bg-green-600 transition duration-200`}>
            Completed
          </button>
        </div>
        <TaskList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
      </div>
    </div>
  );
};

export default Index;
