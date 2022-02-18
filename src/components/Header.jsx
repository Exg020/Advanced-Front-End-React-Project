import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
import TripForm from "./TripForm";
const Header = ({ title }) => {
	return (
		<Row>
			<Navbar
				bg='dark'
				variant='dark'
				className='shadow m-0'
				style={{ borderRadius: "0px 0px 15px 15px" }}>
				<Nav>
					<Link className='nav-link' to='/'>
						{title}
					</Link>
				</Nav>
				<Nav className='me-auto'>
					<Nav.Link>
						<Link to='/trips' className='nav-link'>
							Trip
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar>
		</Row>
	);
};

export default Header;
