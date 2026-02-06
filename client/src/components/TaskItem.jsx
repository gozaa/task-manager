import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onUpdate, onDelete }) => {
    const toggleComplete = async () => {
        try {
            const updatedStatus = task.is_completed ? 0 : 1;
            await axios.put(`http://localhost:3000/api/tasks/${task.id}`, {
                is_completed: updatedStatus
            });
            onUpdate({ ...task, is_completed: updatedStatus });
        } catch (err) {
            console.error('Error updating task', err);
        }
    };

    const deleteTask = async () => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        try {
            await axios.delete(`http://localhost:3000/api/tasks/${task.id}`);
            onDelete(task.id);
        } catch (err) {
            console.error('Error deleting task', err);
        }
    };

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${task.is_completed ? 'bg-light' : ''}`}>
            <div className="d-flex align-items-center gap-3">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={!!task.is_completed}
                    onChange={toggleComplete}
                    style={{ cursor: 'pointer', width: '1.2em', height: '1.2em' }}
                />
                <div style={{ textDecoration: task.is_completed ? 'line-through' : 'none', color: task.is_completed ? '#6c757d' : 'inherit' }}>
                    <h6 className="mb-0">{task.title}</h6>
                    {task.description && <small className="text-muted">{task.description}</small>}
                </div>
            </div>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={deleteTask}
                title="Delete Task"
            >
                &times;
            </button>
        </li>
    );
};

export default TaskItem;
