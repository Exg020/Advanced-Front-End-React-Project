import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Day from "./Day";
import DayForm from "./DayForm";
import FormModal from "./FormModal";

const Trips = ({ trip, setTrip }) => {

	console.log(trip);
	let dayId = 0;
	return (
		<>
			<Col className='my-container m-2 p-3'>
				<Row>
					<Col>
						{" "}
						<h2>{trip.title}</h2>
					</Col>
					<Col style={{ textAlign: "right" }}>
						{" "}
						<h2>{trip.dateRange}</h2>
					</Col>
				</Row>

				{trip.days.map((day) => {
					return <Day key={dayId++} day={day} />;
				})}
			</Col>
		</>
	);
};

export default Trips;
