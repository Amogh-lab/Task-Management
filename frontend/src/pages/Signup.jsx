import React from 'react'
import "./Signup.css"
import {useState} from "react"
import { FaPassport } from 'react-icons/fa'

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    mail: "",
    password: "",
    age: ""
  });
  
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Signup successful! You can now log in.");
        setForm({
          name: "",
          username: "",
          mail: "",
          password: "",
          age: ""
        });
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {message && <p className="message">{message}</p>}

        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={form.username} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="mail" 
          placeholder="Email" 
          value={form.mail} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={form.age} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;