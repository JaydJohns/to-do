import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    }
    loadProjects();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
