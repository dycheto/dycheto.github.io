import './ContactMe.scss';
import { motion } from 'framer-motion';
import ContactDetails from '../../components/contact/ContactDetails';
import { useTheme } from '../../hooks/useTheme';

const Contact = () => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1,
            }}
            className={`contact-page parallax`}
        >
            <ContactDetails />
        </motion.section >
    );
};

export default Contact;
