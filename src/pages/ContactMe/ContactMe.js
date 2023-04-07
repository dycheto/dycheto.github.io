import './ContactMe.scss';
import { motion } from 'framer-motion';
import ContactDetails from '../../components/contact/ContactDetails';
import { useTheme } from '../../hooks/useTheme';

const Contact = () => {
    const { currentTheme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1,
            }}
            className={`contact-page`}
        >
            <ContactDetails />
        </motion.div >
    );
};

export default Contact;
