import { Row } from "react-bootstrap";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";
import FormModal from "./FormModal";
const Day = ({ day }) => {
	return (
		<>
			<Row className='my-container mx-1 my-4 py-2'>
				<h3>
					{day.title} --- {day.date}
					<FormModal
						title='Add Activity'
						thisForm={<ActivityForm />}
					/>
				</h3>
				<ActivityList activityList={day.activities} />
			</Row>
		</>
	);
};

export default Day;
