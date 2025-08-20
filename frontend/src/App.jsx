import React from 'react'
import './App.css'
import { useEffect } from 'react';
import TaskCard from './components/taskcard.jsx';

const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState('');


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const data = await response.json();
        setTasks(data);
        console.log('Tasks fetched:', data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);


  return (
  <div>
    <h2>tasks to do</h2>
    <TaskCard tasks={tasks} />
  </div>
  )
}

export default App