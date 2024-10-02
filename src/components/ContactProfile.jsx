import { useState, useEffect, useContext } from 'react';
import NavigationMenu from './NavigationMenu';
import { ContactsContext } from '../context';
import { useParams } from 'react-router-dom';

function ContactProfile() {
	const [person, setPerson] = useState(null);
	const { id } = useParams();
	const { contactsData } = useContext(ContactsContext);

	useEffect(() => {
		if (contactsData && id) {
			const matchingPerson = contactsData.find(
				(p) => p.id === parseInt(id, 10)
			);

			if (matchingPerson) {
				setPerson(matchingPerson);
			}
		}
	}, [contactsData, id]);

	if (!person) return <p>Loading...</p>;

	return (
		<>
			<NavigationMenu />
			<article>
				<h2>
					{person.firstName} {person.lastName}
				</h2>
				<p>
					{person.street} {person.city}
				</p>
			</article>
		</>
	);
}

export default ContactProfile;
