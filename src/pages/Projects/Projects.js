import './Projects.scss';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";
import { useTheme } from '../../hooks/useTheme';
import { v4 } from 'uuid'
import { motion } from 'framer-motion'

export default function Projects() {
    const { theme } = useTheme()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            className={`projects-wrapper`}
        >

            <div className={`projects-container ${theme}`} >
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} _id={v4()} />
                ))}
            </div>

        </motion.section>
    );
};