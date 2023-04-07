import { useState, useContext, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.scss';
import * as themeService from '../../services/themeService';
import Switch from 'react-switch';

export default function Navbar() {
  const { currentTheme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  themeService.setTheme(currentTheme);
  const theme = themeService.getTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-link">
          Home
        </a>
      </div>
      <div className={`nav-center ${isNavOpen ? 'show' : ''}`}>
        <a href="/about" className="nav-link">
          About Me
        </a>
        <a href="/projects" className="nav-link">
          Projects
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-right">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          uncheckedIcon={<FiSun />}
          checkedIcon={<FiMoon />}
          onColor="#757575"
          offColor="#9e9e9e"
          height={20}
          width={40}
          handleDiameter={18}
        />
        <button
          className={`nav-link toggle-nav ${isNavOpen ? 'hide' : ''}`}
          onClick={handleNavToggle}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}
