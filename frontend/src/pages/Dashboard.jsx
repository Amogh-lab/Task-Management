import React from 'react'
import Taskcard from '../components/taskcard.jsx';

const Dashboard = ({tasks}) => {
  console.log(tasks);
  return (
    <div>
        <Taskcard tasks={tasks} />
    </div>
  )
}

export default Dashboard