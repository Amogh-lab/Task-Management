import React from 'react';
import "./taskcard.css";
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const TaskCard = ({ tasks }) => {
    const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };
  console.log(tasks);

  return (
    <div className="task-container">
      <h3 className="task-title">TASK CARD</h3>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <div className="task-left">
              <div>
                <h4 className={`task-name ${task.task_status ? 'completed' : ''}`}>
                  {task.task}
                </h4>
                <span className="task-time">
                  {formatTime(task.timings)}
                </span>
                <ul className="task-details">
                  {task.task_details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="task-actions">
                  <button className="done-btn" title="Done"><FaCheck /></button>
                  <button className="edit-btn" title="Edit"><FaEdit /></button>
                  <button className="delete-btn" title="Delete"><FaTrash /></button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
