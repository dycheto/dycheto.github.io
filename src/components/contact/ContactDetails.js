import './ContactDetails.scss';
import { useTheme } from '../../hooks/useTheme';
import { contactsData } from '../../data/contactsData';

const ContactDetails = () => {

	const { currentTheme } = useTheme();

	return (
		<div className={`contact-details ${currentTheme === "dark" ? "contact-details--dark" : "contact-details"}`}>
			<div className="contact-details__heading">Contact details</div>
			<ul className="contact-details__list">
				{contactsData.map((contact) => (
					<li className="contact-details__list__item" key={contact.id}>
						<a
							href={contact.link}
							target="_blank"
							rel="noopener noreferrer"
							className="contact-details__list__item__link"
						>
							<i className="contact-details__list__item__icon">{contact.icon}</i>
							<span className="contact-details__list__item__details">{contact.name}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactDetails;
