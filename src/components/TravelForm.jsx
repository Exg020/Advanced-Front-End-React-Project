import {
	Col,
	Row,
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Button,
	FormSelect,
} from "react-bootstrap";
const TravelForm = ({ destinations }) => {
	return (
		<>
			<Row>
				<Col
					style={{
						margin: "10px",
						padding: "10px",
						borderRadius: "20px",
						backgroundColor: "gray",
					}}>
					<Form>
						<FormGroup>
							<FormLabel>location</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<FormGroup>
							<FormLabel>Date</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<Button variant='primary' type='submit' className='m-2'>
							Add destination
						</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col
					style={{
						margin: "10px",
						padding: "10px",
						borderRadius: "20px",
						backgroundColor: "gray",
					}}>
					<Form>
						<FormGroup>
							<FormLabel>Location</FormLabel>
							<FormSelect>
								{destinations.map((destination) => {
									return (
										<option key={destination.id}>
											{destination.location} -{" "}
											{destination.date}
										</option>
									);
								})}
							</FormSelect>
						</FormGroup>
						<FormGroup>
							<FormLabel>Activity</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<FormGroup>
							<FormLabel>When</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<FormGroup>
							<FormLabel>Where</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<FormGroup>
							<FormLabel>Notes</FormLabel>
							<FormControl value='' />
						</FormGroup>
						<Button variant='primary' type='submit' className='m-2'>
							Add Activity
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default TravelForm;
