import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <header className="mb-5 text-center">
          <h1 className="display-4 fw-bold text-primary">Task Manager</h1>
          <p className="lead text-secondary">A simple full-stack React + Node application</p>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
