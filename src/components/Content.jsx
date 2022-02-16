import { Container } from "react-bootstrap";
import TravelList from "./TravelList";
import TravelForm from "./TravelForm";
const Content = ({ destinations }) => {
	return (
		<Container>
			<TravelForm destinations={destinations} />
			<TravelList destinations={destinations} />
		</Container>
	);
};

export default Content;
