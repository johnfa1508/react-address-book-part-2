import { useState } from 'react';
import ContactsList from './ContactsList';
import Form from './Form';
import ContextProvider from './ContextProvider';

function Dashboard() {
	const [contactsData, setContactsData] = useState([]);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		street: '',
		city: '',
	});

	const handleViewContact = (id) => {
		console.log('view profile ' + id);
		// api call to https://boolean-uk-api-server.fly.dev/johnfa1508/contact/{id}
	};

	return (
		<>
			<ContextProvider
				contactsData={contactsData}
				setContactsData={setContactsData}
				formData={formData}
				setFormData={setFormData}
				handleViewContact={handleViewContact}
			>
				{/* TODO: MAKE INTO COMPONENT WITH ROUTING & LINKING */}
				<h2>Menu</h2>
				<nav>
					<ul>
						<li>Contacts List</li>
						<li>Add New Contact</li>
					</ul>
				</nav>

				<ContactsList />
				<Form />
			</ContextProvider>
		</>
	);
}

export default Dashboard;
