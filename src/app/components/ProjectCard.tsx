interface ProjectCardProps {
  project: {
  title: string;
  description: string;
  };
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
  <div>
  <h2>{project.title}</h2>
  <p>{project.description}</p>
  </div>
  );
  };
  
  export default ProjectCard;