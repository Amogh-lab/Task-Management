import React from 'react';
import "./taskcard.css";

const TaskCard = ({ tasks }) => {
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
                <ul className="task-details">
                  {task.task_details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="task-actions">
                  <button className="done-btn">Done</button>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
            <span className="task-time">
              {task.timings}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
