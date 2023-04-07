import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './TechStack.scss';

const TechStack = () => {
    const { currentTheme } = useTheme();

    return (
        <div className={`tech-stack ${currentTheme === "dark" ? "tech-stack--dark" : "tech-stack"}`}>
            <h2 className={`tech-stack__title ${currentTheme ? 'dark' : ''}`}>{`export const techStack = () => { `}</h2>
            <div className="tech-stack__list">
                <ul>
                    <li> {`const currentStack = [JavaScript,`}</li>
                    <li>React JS,</li>
                    <li>SCSS,</li>
                    <li>HTML5,</li>
                    <li>CSS,</li>
                    <li>Node JS,</li>
                    <li>Express JS,</li>
                    <li>Firebase,</li>
                    <li>Postman,</li>
                    <li>{`GitHub];`}</li>
                </ul>
            </div>
            <p>{`const loading = {C#, NET, Next Js}; `}</p>
            <h3>{`return currentStack ; `}</h3>
            <h2 className={`tech-stack__title ${currentTheme ? 'dark' : ''}`}>{`}; `}</h2>
        </div>
    );
};

export default TechStack;
