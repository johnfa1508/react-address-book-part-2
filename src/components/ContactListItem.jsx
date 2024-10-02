import { Link } from 'react-router-dom';

function ContactListItem({ contact }) {
	return (
		<>
			<li>
				{contact.firstName} {contact.lastName}
			</li>

			<Link to={`/view/${contact.id}`}>
				<h3>View</h3>
			</Link>
		</>
	);
}

export default ContactListItem;
