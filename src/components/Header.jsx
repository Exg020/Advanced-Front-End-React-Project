import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
