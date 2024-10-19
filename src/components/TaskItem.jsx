import React, { useState } from "react";
import SubtaskForm from "./SubtaskForm";

function TaskItem({ task, editTask, deleteTask, toggleTaskStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {isEditing ? (
        <>
          <input type="text" value={editedTask.title} onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} className="border border-gray-300 rounded-lg p-2 w-full mb-3" />
          <textarea value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })} className="border border-gray-300 rounded-lg p-2 w-full mb-3" />
          <button onClick={handleSave} className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600">
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{task?.title}</h3>
            <p className={`text-sm ${task?.completed ? "text-green-600" : "text-yellow-500"}`}>{task?.completed ? "Completed" : "Pending"}</p>
          </div>
          <p className="text-gray-600">{task?.description}</p>
          <p className="text-sm text-gray-400">Due: {task?.dueDate}</p>
          <p className="text-sm text-gray-400 mb-3">Created: {task?.createdAt}</p>

          <button onClick={() => toggleTaskStatus(task.id)} className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 mb-2">
            {task?.completed ? "Mark as Pending" : "Mark as Completed"}
          </button>
          <button onClick={handleEdit} className="bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 ml-2">
            Edit
          </button>
          <button onClick={() => deleteTask(task?.id)} className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 ml-2">
            Delete
          </button>
          <SubtaskForm task={task} editTask={editTask} />
        </>
      )}
    </div>
  );
}

export default TaskItem;
