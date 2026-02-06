import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            const response = await axios.post('http://localhost:3000/api/tasks', {
                title,
                description
            });
            onTaskAdded(response.data.data);
            setTitle('');
            setDescription('');
        } catch (err) {
            console.error('Error adding task', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New task title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button className="btn btn-primary" type="submit">Add Task</button>
            </div>
            <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Optional description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </form>
    );
};

export default AddTask;
