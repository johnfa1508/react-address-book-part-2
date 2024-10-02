import { useState, useEffect } from 'react';

function ContactProfile(props) {
	const [person, setPerson] = useState(null);
	const { id, contacts } = props;

	useEffect(() => {
		if (contacts && id) {
			const matchingPerson = contacts.find((p) => p.login.uuid === id);

			if (matchingPerson) {
				setPerson(matchingPerson);
			}
		}
	}, [contacts, id]);

	if (!person) return <p>Loading...</p>;
	return (
		<>
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
