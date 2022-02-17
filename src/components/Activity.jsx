import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
let id = 0;

const Activity = ({ activity }) => {
	// const [activity, setActivity] = useState({});
	// GET
	// const getActivity = (id) => {
	// 	fetch(`http://localhost:8080/api/getActivity?id=${id}`)
	// 		.then((response) => response.json())
	// 		//Then with the data from the response in JSON...
	// 		.then((activity) => {
	// 			console.log("Success :", activity);
	// 			setActivity(activity);
	// 		})
	// 		//Then with the error genereted...
	// 		.catch((error) => {
	// 			console.error("Error:", error);
	// 		});
	// };

	// useEffect(() => {
	// 	getActivity(2);
	// }, []);

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
