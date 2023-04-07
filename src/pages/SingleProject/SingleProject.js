import { useState } from 'react';
import Modal from 'react-modal';
import './SingleProject.scss';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function SingleProject() {
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    >
      <div className="single-project-container">
        <div className="project-header">
          <h1>Project Name</h1>
          <div className="project-photos">
            {location.state.image.map((image) => (
              <motion.img
                src={image}
                alt=""
                key={image.length}
                whileHover={{ scale: 1.1 }}
                onClick={() => openModal(image)}
              />
            ))}
          </div>
        </div>
        <div className="project-details-container">
          <div className="project-details-left">
            <div className="project-detail">
              <h2>Objective</h2>
              <p>{location.state.objective}</p>
            </div>
            <div className="project-detail">
              <h2>Tools & Technologies</h2>
              <p>{location.state.tools}</p>
            </div>
          </div>
          <div className="project-details-right">
            <div className="project-detail">
              <h2>Challenge</h2>
              <p>{location.state.description}</p>
            </div>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <img src={selectedImage} alt="" className="enlarged-image" />
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </motion.section>
  );
}

export default SingleProject;
