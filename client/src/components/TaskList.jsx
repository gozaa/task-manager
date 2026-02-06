import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/tasks');
            setTasks(response.data.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch tasks');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks([newTask, ...tasks]);
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map(task =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        ));
    };

    const handleTaskDeleted = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    if (loading) return <div className="text-center mt-5"><div className="spinner-border text-primary" role="status"></div></div>;
    if (error) return <div className="alert alert-danger mt-5">{error}</div>;

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
                <h4 className="mb-0">My Tasks</h4>
            </div>
            <div className="card-body">
                <AddTask onTaskAdded={handleTaskAdded} />
                <hr />
                {tasks.length === 0 ? (
                    <p className="text-muted text-center">No tasks yet. Add one above!</p>
                ) : (
                    <ul className="list-group list-group-flush">
                        {tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onUpdate={handleTaskUpdated}
                                onDelete={handleTaskDeleted}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TaskList;
