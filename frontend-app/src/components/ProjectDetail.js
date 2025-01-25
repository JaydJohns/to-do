import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetail } from '../services/api';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjectDetail() {
      try {
        const data = await fetchProjectDetail(id);
        setProject(data);
      } catch (err) {
        setError(err.message);
      }
    }
    loadProjectDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Project Detail</h2>
      <p>Name: {project.name}</p>
      <p>Description: {project.description}</p>
      {/* Add more project details as needed */}
    </div>
  );
}

export default ProjectDetail;
