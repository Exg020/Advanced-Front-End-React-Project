
import { Accordion } from "react-bootstrap";
let id = 0;

const Activity = ({ activity }) => {
	return (
		<>
			<Accordion.Item eventKey={id++}>
				<Accordion.Header>
					{activity.title} - {activity.time}
				</Accordion.Header>
				<Accordion.Body>{activity.notes}</Accordion.Body>
			</Accordion.Item>
		</>
	);
};

export default Activity;
