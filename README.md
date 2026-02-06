# Tasks App

A simple and efficient task management application built with the **PERN**-like stack (Postgres/SQLite, Express, React, Node.js).

## Tech Stack

- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express
- **Database:** SQLite (`tasks.db`)

## Setup & Installation

Follow these steps to get the application running locally.

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gozaa/task-manager.git
    cd tasks-app
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd client
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd ../server
    npm install
    ```

### Running the Application

You will need to run the client and server in separate terminal windows.

**Backend (Server):**
```bash
cd server
node server.js
```
*Note: The server runs on port 5000 (default).*

**Frontend (Client):**
```bash
cd client
npm run dev
```
*Open your browser to the URL shown (usually http://localhost:5173).*

## User Guide

### 1. Adding a Task
- Navigate to the home page.
- Locate the "Add Task" input field at the top of the list.
- Type your task description (e.g., "Buy groceries").
- Click the **"Add"** button.
- Your new task will appear immediately in the list below.

### 2. Marking a Task as Completed
- Find the task you want to complete in the list.
- Click the **checkbox** or status indicator next to the task name.
- The task style will update to show it is completed (e.g., strikethrough).

### 3. Deleting a Task
- Locate the task you wish to remove.
- Click the **"Delete"** (or trash icon) button next to the task.
- The task will be permanently removed from the database.

### 4. Viewing Tasks
- All tasks are displayed in a list format.
- Tasks are persisted in the SQLite database, so they remain saved even after refreshing the page or restarting the server.
