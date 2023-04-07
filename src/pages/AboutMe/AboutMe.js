import './AboutMe.scss';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { aboutMeData } from '../../data/aboutMeData';
import TechStack from '../../components/TeckStack/TechStack';

export default function AboutMe() {
    const { currentTheme } = useTheme();

    const [profileImg, setProfileImage] = useState(`https://firebasestorage.googleapis.com/v0/b/react-e-commerce-app-dycheto.appspot.com/o/images%2FprofilePicture.jpg?alt=media&token=c5523c47-7223-4c77-b157-dc3e51f37511`);

    return (
        
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
                className={`about-page ${currentTheme === "dark" ? "about-page--dark" : "about-page"}`}
            >
                <div className="about-content">
                    <div className="about-image-container">
                        <img src={profileImg} alt="Tihomir Dukov" className="about-image" />
                    </div>
                    <div className="about-text-container">
                        <p className={`about-text about-text--small ${currentTheme === "dark" ? "about-text--dark" : ""}`}>
                            {aboutMeData[0].bio}
                        </p>
                        <p className={`about-text about-text--small ${currentTheme === "dark" ? "about-text--dark" : ""}`}>
                            {aboutMeData[1].bio}
                        </p>
                        <p className={`about-text about-text--small ${currentTheme === "dark" ? "about-text--dark" : ""}`}>
                            {aboutMeData[2].bio}
                        </p>
                        <p className={`about-text about-text--small ${currentTheme === "dark" ? "about-text--dark" : ""}`}>
                            {aboutMeData[3].bio}
                        </p>
                        <p className={`about-text about-text--small ${currentTheme === "dark" ? "about-text--dark" : ""}`}>
                            {aboutMeData[4].bio}
                        </p>
                    </div>
                    <div className="dev-stack">
                        <TechStack />
                    </div>
                </div>
            </motion.section>
    );
}
