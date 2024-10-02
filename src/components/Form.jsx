import { useContext, useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import { ContactsContext, FormContext } from '../context';

function Form() {
	const { formData, setFormData } = useContext(FormContext);
	const { contactsData, setContactsData } = useContext(ContactsContext);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		// TODO: Post this to API
		const newContact = { ...formData, id: contactsData.length + 1 };

		setContactsData((prevContacts) => [...prevContacts, newContact]);

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
			<h2>Create Contact</h2>
			<>
				<form className="form" onSubmit={handleSubmit}>
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

					<input
						className="form__submit"
						type="submit"
						value="Submit Survey!"
					/>
				</form>
			</>
		</>
	);
}

export default Form;
