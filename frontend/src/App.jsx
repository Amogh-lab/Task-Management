import React from 'react'
import './App.css'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

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
  console.log(tasks);

  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard tasks={tasks}/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App