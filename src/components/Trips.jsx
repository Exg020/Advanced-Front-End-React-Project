import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Day from "./Day";
import ActivityList from "./ActivityList";
const trips = [
	{
		title: "my first trip",
		date: "10 sept 2022",
		activities: [],
	},
	{
		title: "my first trip",
		date: "10 sept 2022",
		activities: [],
	},
	{
		title: "my first trip",
		date: "10 sept 2022",
		activities: [],
	},
];
const Trips = () => {
	return (
		<>
			{trips.map((trip) => {
				return (
					<Row key={trip.id} className='my-container mx-1 my-4 py-2'>
						<h3>
							{trip.title} --- {trip.date}
						</h3>
						<Day />
					</Row>
				);
			})}
		</>
	);
};

export default Trips;
