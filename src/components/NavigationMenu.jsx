import { Link } from 'react-router-dom';

function NavigationMenu() {
	return (
		<>
			<h2>Menu</h2>
			<nav>
				<ul>
					<Link to="/">Dashboard</Link>
					<Link to="/contacts">Contacts List</Link>
					<Link to="/create">Add New Contact</Link>
				</ul>
			</nav>
		</>
	);
}

export default NavigationMenu;
