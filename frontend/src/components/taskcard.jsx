import React from 'react';

const TaskCard = ({ tasks }) => {
  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((task) => (
        <div key={task._id}>
          <h4>{task.task}</h4>
          <p>Task No: {task.task_no}</p>
          <p>{task.task_details}</p>
          <p>Status: {task.task_status}</p>
          <p>Timings: {task.timings}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;