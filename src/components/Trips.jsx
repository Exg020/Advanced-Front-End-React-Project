import { Row } from "react-bootstrap";
import Day from "./Day";

const Trips = ({ trips }) => {
	console.log(trips);
	let dayId = 0;
	let tripId = 0;
	return (
		<>
			{trips.map((trip) => {
				return (
					<Row key={tripId} className='my-container mx-1 my-4 py-2'>
						<h3>
							{trip.title} --- {trip.dateRange}
						</h3>
						{trip.days.map((day) => {
							return <Day key={dayId++} day={day} />;
						})}
					</Row>
				);
			})}
		</>
	);
};

export default Trips;
