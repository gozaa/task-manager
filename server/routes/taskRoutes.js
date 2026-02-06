const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all tasks
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tasks ORDER BY created_at DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Create a new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
    const params = [title, description];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(201).json({
            message: 'success',
            data: {
                id: this.lastID,
                title,
                description,
                is_completed: 0
            }
        });
    });
});

// Update a task (toggle completion or update text)
router.put('/:id', (req, res) => {
    const { title, description, is_completed } = req.body;
    const sql = `UPDATE tasks set 
               title = COALESCE(?, title), 
               description = COALESCE(?, description), 
               is_completed = COALESCE(?, is_completed) 
               WHERE id = ?`;
    const params = [title, description, is_completed, req.params.id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            changes: this.changes
        });
    });
});

// Delete a task
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    const params = [req.params.id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'deleted',
            changes: this.changes
        });
    });
});

module.exports = router;
