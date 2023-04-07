import './ProjectCard.scss'
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project, _id }) {
    const navigate = useNavigate()

    const handleClick = () => {

        navigate(`/projects/${_id}`, {
            state: project
        });
    }

    return (
        <div className="project-card" onClick={handleClick}>
            <div className="project-image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
}