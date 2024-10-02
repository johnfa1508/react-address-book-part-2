import ContactListItem from './ContactListItem';
import { ContactsContext } from '../context';
import { useEffect, useContext } from 'react';
import NavigationMenu from './NavigationMenu';

function ContactsList() {
	const { contactsData, setContactsData } = useContext(ContactsContext);
	const apiURL = 'https://boolean-uk-api-server.fly.dev/johnfa1508/contact/';

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiURL);
			const jsonData = await response.json();

			setContactsData(jsonData);
		};

		fetchData();
	}, [setContactsData]);

	return (
		<>
			<NavigationMenu />
			<h2>Contacts</h2>
			<ul>
				{contactsData.map((contactItem) => (
					<ContactListItem contact={contactItem} key={contactItem.id} />
				))}
			</ul>
		</>
	);
}

export default ContactsList;
