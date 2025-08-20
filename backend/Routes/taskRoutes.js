const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const {task, timings, task_no, task_details, task_status} = req.body;
        const newTask = new Task({task, timings, task_no, task_details, task_status});

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.delete('/:id', async (req, res) => {
    try { 
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.status(204).json({message: 'Task deleted successfully'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
module.exports = router;