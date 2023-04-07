import './Home.scss';

import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerImg from '../images/developer.svg';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/reusable/Button';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const devImg = `https://firebasestorage.googleapis.com/v0/b/react-e-commerce-app-dycheto.appspot.com/o/developer.svg?alt=media&token=620c3cce-573e-43e9-864f-d9373e0924ff`;

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className={`home-page ${theme === 'dark' ? 'home-page--dark' : ''}`}
      >
        <div className='home-text-left'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.1,
            }}
            className={`home-text-header ${theme === 'dark' ? 'text-white' : ''}`}
          >
            Hello, I am Tihomir
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.2,
            }}
            className={`home-text-about ${theme === 'dark' ? 'text-white' : ''}`}
          >
            A Front-End Developer & React Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <a
              download="Tihomir-Dukov.pdf"
              href="https://firebasestorage.googleapis.com/v0/b/react-e-commerce-app-dycheto.appspot.com/o/Tihomir%20Dukov%20CV%20.pdf?alt=media&token=9b292bd0-2190-40ef-9935-86eb6168915b"
              className="home-download-button"
              aria-label="Download Resume"
            >
              {/* <FiArrowDownCircle className="download-icon"></FiArrowDownCircle> */}
              <h1 className={`font-general-medium ${theme === 'dark' ? 'text-white' : ''}`}>
                Resume
              </h1>

            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="home-text-right"
        >
          <img src={devImg} alt="Developer" />
        </motion.div>
      </motion.section>

    </>

  );
};
