const express = require('express');
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(logger); // Log requests

// Routes
app.use('/tasks', taskRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



