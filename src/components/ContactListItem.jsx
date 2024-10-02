import { useContext } from 'react';
import { ContactsContext } from '../context';

function ContactListItem({ contact }) {
	const { handleViewContact } = useContext(ContactsContext);
	return (
		<>
			<li>
				{contact.firstName} {contact.lastName}
			</li>

			<button onClick={() => handleViewContact(contact.id)}>View</button>
		</>
	);
}

export default ContactListItem;
