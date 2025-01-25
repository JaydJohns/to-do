const API_URL = 'http://localhost:3000/api'; // Update with your backend API URL

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function fetchProjectDetail(id) {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project detail');
  }
  return response.json();
}

export async function fetchTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
}

export async function fetchTaskDetail(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch task detail');
  }
  return response.json();
}

export async function addTask(task) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to add task');
  }
  return response.json();
}

// Add more API functions as needed
