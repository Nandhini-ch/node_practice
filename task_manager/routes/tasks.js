const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const tasksFile = path.join(__dirname, '../data/tasks.json');

// Read tasks from file
const readTasks = () => {
    try {
        // Check if file exists
        if (!fs.existsSync(tasksFile)) {
            return []; // Return empty array if file doesn't exist
        }

        // Read the file content
        const data = fs.readFileSync(tasksFile, 'utf8');

        // If the file is empty, return an empty array
        if (!data) {
            return [];
        }

        // Try parsing the JSON content
        return JSON.parse(data);
    } catch (error) {
        // In case of any error (e.g., malformed JSON), return empty array
        console.error('Error reading tasks file:', error);
        return [];
    }
};

// Write tasks to file
const writeTasks = (tasks) => fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));

// Get all tasks
router.get('/', (req, res) => {
    const tasks = readTasks();
    
    if (tasks.length === 0) {
        // If no tasks are found, send a message indicating so
        return res.status(200).json({ message: 'No tasks available' });
    }

    // If tasks exist, send them as JSON
    res.status(200).json(tasks);
});

// Create a new task
router.post('/', (req, res) => {
    const tasks = readTasks();
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// Update a task
router.put('/:id', (req, res) => {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id, 10);
    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        writeTasks(tasks);
        res.status(200).json(tasks[index]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// Delete a task
router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id, 10);
    const filteredTasks = tasks.filter(task => task.id !== taskId);

    if (filteredTasks.length !== tasks.length) {
        writeTasks(filteredTasks);
        res.status(200).json({ message: 'Task deleted' });
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

module.exports = router;
