import { Col, Row, Table } from "react-bootstrap";

const TravelList = ({ destinations }) => {
	return (
		<Row>
			<Col
				style={{
					margin: "10px",
					padding: "10px",
					borderRadius: "20px",
					backgroundColor: "gray",
				}}>
				{destinations.map((destination) => {
					return (
						<Row className='px-4 py-1' key={destination.id}>
							<h4>
								{destination.location} - {destination.date}
							</h4>
							<Table className='bg-light' striped bordered hover>
								<thead>
									<tr>
										<td>Activity</td>
										<td>When</td>
										<td>Where</td>
										<td>Notes</td>
									</tr>
								</thead>
								<tbody>
									{destination.activities.map((activity) => {
										return (
											<tr key={activity.id}>
												<td>{activity.what}</td>
												<td>{activity.when}</td>
												<td>{activity.where}</td>
												<td>{activity.notes}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</Row>
					);
				})}
			</Col>
		</Row>
	);
};

export default TravelList;
