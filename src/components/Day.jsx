import { Row } from "react-bootstrap";
import ActivityList from "./ActivityList";

const Day = ({ day }) => {
	return (
		<>
			<Row className='my-container mx-1 my-4 py-2'>
				<h3>
					{day.title} --- {day.date}
				</h3>
				<ActivityList activityList={day.activities} />
			</Row>
		</>
	);
};

export default Day;
