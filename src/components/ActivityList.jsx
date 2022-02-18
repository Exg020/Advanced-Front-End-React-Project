import { Accordion } from "react-bootstrap";
import Activity from "./Activity";
const ActivityList = ({ activityList }) => {
	return (
		<Accordion>
			{activityList.map((activity) => {
				return <Activity key={activity.id} activity={activity} />
			})}
		</Accordion>
	);
};

export default ActivityList;
