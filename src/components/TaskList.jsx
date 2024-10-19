import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask, toggleTaskStatus }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks?.length === 0 ? (
                <p className="text-black-500 font-bold text-center w-full">No tasks available.......</p>
            ) : (
                tasks?.map((task) => (
                    <TaskItem
                        key={task?.id}
                        task={task}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        toggleTaskStatus={toggleTaskStatus}
                    />
                ))
            )}
        </div>
    );
}

export default TaskList;
