import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
import TripForm from "./TripForm";
const Header = ({ title }) => {
	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				className='shadow'
				style={{ borderRadius: "0px 0px 15px 15px" }}>
				<Container>
					<Nav>
						<Link className='nav-link' to='/'>
							{title}
						</Link>
					</Nav>
					<Nav className='me-auto'>
						<Nav.Link>
							<Link to='/trips' className='nav-link'>
								Trips
							</Link>
						</Nav.Link>
					</Nav>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text>
							<FormModal title='Add Trip' thisForm={<TripForm />} />
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
