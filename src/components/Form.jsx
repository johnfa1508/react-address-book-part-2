import { useContext, useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import { ContactsContext, FormContext } from '../context';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

function Form() {
	const { formData, setFormData } = useContext(FormContext);
	const { contactsData, setContactsData } = useContext(ContactsContext);
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		const newContact = { ...formData, id: contactsData.length + 1 };

		setContactsData((prevContacts) => [...prevContacts, newContact]);

		fetch('https://boolean-uk-api-server.fly.dev/johnfa1508/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newContact),
		})
			.then((response) => response.json())
			.then(() => {
				navigate('/contacts');
			});

		setFormData({
			firstName: '',
			lastName: '',
			street: '',
			city: '',
		});
	};

	useEffect(() => {
		console.log(contactsData);
	}, [contactsData]);

	return (
		<>
			<NavigationMenu />

			<form className="form" onSubmit={handleSubmit}>
				<h2>Create Contact</h2>
				<label>
					First Name:
					<input
						type="text"
						name="firstName"
						onChange={handleChange}
						value={formData.firstName}
					/>
				</label>

				<label>
					Last Name:
					<input
						type="text"
						name="lastName"
						onChange={handleChange}
						value={formData.lastName}
					/>
				</label>

				<label>
					Street:
					<input
						type="text"
						name="street"
						onChange={handleChange}
						value={formData.street}
					/>
				</label>

				<label>
					City:
					<input
						type="text"
						name="city"
						onChange={handleChange}
						value={formData.city}
					/>
				</label>

				<input className="form__submit" type="submit" value="Submit Survey!" />
			</form>
		</>
	);
}

export default Form;
