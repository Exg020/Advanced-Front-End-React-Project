import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import ActivityList from "./ActivityList";

const Day = () => {
	let title = "day 1";
	let date = "10 sept 2022";

	const [activityList, setActivityList] = useState([]);
	// GET
	const getActivities = () => {
		fetch(`http://localhost:8080/api/getActivities`)
			.then((response) => response.json())
			//Then with the data from the response in JSON...
			.then((activities) => {
				console.log("Success :", activities);
				setActivityList([...activities]);
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	useEffect(() => {
		getActivities();
	}, []);

	return (
		<>
			<Row className='my-container mx-1 my-4 py-2'>
				<h3>
					{title} --- {date}
				</h3>
				<ActivityList activityList={activityList} />
			</Row>
			;
		</>
	);
};

export default Day;
