import React, { useState } from "react";

function SubtaskForm({ task, editTask }) {
  const [subtaskTitle, setSubtaskTitle] = useState("");
  const [error, setError] = useState("");

  const addSubtask = () => {
    if (subtaskTitle.trim() === "") {
      setError("Subtask title cannot be empty.");
      return;
    }

    const updatedTask = {
      ...task,
      subtasks: [...task.subtasks, { id: Date.now(), title: subtaskTitle, completed: false }],
    };
    editTask(updatedTask);
    setSubtaskTitle("");
    setError("");
  };

  const toggleSubtaskStatus = (subtaskId) => {
    const updatedTask = {
      ...task,
      subtasks: task.subtasks.map((subtask) => (subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask)),
    };
    editTask(updatedTask);
  };

  return (
    <div className="mt-4">
      <h4 className="text-md font-bold mb-2">Subtasks:</h4>
      {task.subtasks?.map((subtask) => (
        <div key={subtask?.id} className="flex items-center">
          <input type="checkbox" checked={subtask?.completed} onChange={() => toggleSubtaskStatus(subtask?.id)} className="mr-2" />
          <p className={`flex-1 ${subtask?.completed ? "line-through" : ""}`}>{subtask?.title}</p>
        </div>
      ))}
      <input type="text" value={subtaskTitle} onChange={(e) => setSubtaskTitle(e.target.value)} placeholder="Add Subtask" className={`border ${error ? "border-red-500" : "border-gray-300"} rounded-lg p-2 w-full mt-2`} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button onClick={addSubtask} className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 mt-2">
        Add Subtask
      </button>
    </div>
  );
}

export default SubtaskForm;
