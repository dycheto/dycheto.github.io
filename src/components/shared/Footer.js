import './Footer.scss';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

function Footer() {
    const { currentTheme } = useTheme();

    return (
        <footer className={`footer ${currentTheme}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="contact-title">Contact Me</h2>
                        <div className="icon-container">
                            <a href="https://www.linkedin.com/in/tihomir-dukov-232237266" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://github.com/Dycheto" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;