## Project Description

This project is the frontend part of a technical challenge proposed by **Curotec**. The goal of the challenge is to build a real-time collaborative application using **Laravel** and **Vue 3**. The application includes features such as:

- Data persistence.
- WebSocket integration for real-time updates.
- Code execution.
- Video chat.

The challenge emphasizes real-time updates, data processing, API design, user experience, and problem-solving skills.

## Project Dependencies

- **Node.js** (version 22.9)
- **Git**

## Steps to Run the Project

### 1. Checkout the Projects

Clone the frontend and backend repositories to your local machine:

```bash
# Clone the frontend repository
git clone https://github.com/gabmaxs/curotec-app

# Clone the backend repository
git clone https://github.com/gabmaxs/curotec-test
```

### 2. Install Dependencies

Navigate to the frontend directory and install the project dependencies:

```bash
cd <frontend-directory>
npm install
```

Ensure you also install the dependencies for the backend as specified in its repository.

### 3. Configure Environment Variables

In the frontend project, configure the environment variables in the `.env` file. The required variables are:

- **VITE_PUSHER_APP_KEY**: Pusher key.
- **VITE_PUSHER_CLUSTER**: Pusher cluster.
- **VITE_API_BASE_URL**: Backend API base URL.

For more details on obtaining the Pusher configuration, refer to the [official documentation](https://pusher.com/docs).

Example configuration in `.env`:

```env
VITE_PUSHER_APP_KEY=your_pusher_key
VITE_PUSHER_CLUSTER=your_pusher_cluster
VITE_API_BASE_URL=http://localhost:8000
```

### 4. Start the Local Server

Start the local development server:

```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173` (or another port specified in the terminal).

Ensure the backend is running to enable communication between the application components.
