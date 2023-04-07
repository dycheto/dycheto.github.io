import './SideComponent.css';

export default function SideComponent({
    title,
    text
}) {

    return (
        <div className="project-detail">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};