import React from "react";
import { useForm } from "react-hook-form";

function TaskForm({ addTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      createdAt: new Date().toLocaleString(),
      completed: false,
      subtasks: [],
    };

    addTask(newTask);
    reset(); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>

      <div className="mb-4">
        <input type="text" placeholder="Task Title" {...register("title", { required: "Task title is required." })} className={`border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-lg p-2 w-full mb-1`} />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <textarea placeholder="Task Description" {...register("description", { required: "Task description is required." })} className={`border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-lg p-2 w-full mb-1`}></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <input type="date" {...register("dueDate", { required: "Due date is required." })} className={`border ${errors.dueDate ? "border-red-500" : "border-gray-300"} rounded-lg p-2 w-full mb-1`} />
        {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full md:w-auto">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
