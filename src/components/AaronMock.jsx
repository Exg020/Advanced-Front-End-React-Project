import { useState } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	FormLabel,
	Navbar,
	Button,
	FormControl,
	Table,
	FormSelect,
} from "react-bootstrap";

const AaronMock = () => {
	const [destinations, setDestinations] = useState([
		{
			location: "Fayetteville, Arkansas",
			date: "10 September 2022",
			activities: [
				{
					what: "Finish packing",
					when: "All day!",
					where: "Home",
					notes: "Pack your walking shoes!",
					complete: false,
				},
			],
		},
		{
			location: "Bentonville, Arkansas",
			date: "11 September 2022",
			activities: [
				{
					what: "Fly! to Italy",
					when: "3am",
					where: "XNA Gate:1",
					notes: "Don't wear a belt and wear shoes easy to take off.",
					complete: false,
				},
				{
					what: "Catch up on work",
					when: "The whole flight",
					where: "On the plane.",
					notes: "Are there any snakes on this plane?",
					complete: false,
				},
			],
		},
		{
			location: "Spain, Italy",
			date: "12 September 2022",
			activities: [
				{
					what: "Sleep!",
					when: "All day!",
					where: "Hotel",
					notes: "Put in ear plugs!",
					complete: false,
				},
			],
		},
		{
			location: "Spain, Italy",
			date: "13 September 2022",
			activities: [
				{
					what: "Walk!",
					when: "All day!",
					where: "Everywhere!",
					notes: "Wear the right shoes!",
					complete: false,
				},
				{
					what: "Eat lots of food",
					when: "all day",
					where: "every place I can find",
					notes: "Ask everyone where to eat.",
					complete: false,
				},
				{
					what: "Dinner with Tom",
					when: "8pm",
					where: "Tom's house",
					notes: "Find out what wine Tom likes.",
					complete: false,
				},
			],
		},
	]);
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand>Travel Planner</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>

<div class="col-m-8"></div>


				<Row>
					{
						//travel plans}
					}
					<Col
						md={8}
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
										{destination.location} -{" "}
										{destination.date}
									</h4>
									<Table
										className='bg-light'
										striped
										bordered
										hover>
										<thead>
											<tr>
												<td>Activity</td>
												<td>When</td>
												<td>Where</td>
												<td>Notes</td>
											</tr>
										</thead>
										<tbody>
											{destination.activities.map(
												(activity) => {
													return (
														<tr key={activity.id}>
															<td>
																{activity.what}
															</td>
															<td>
																{activity.when}
															</td>
															<td>
																{activity.where}
															</td>
															<td>
																{activity.notes}
															</td>
														</tr>
													);
												}
											)}
										</tbody>
									</Table>
								</Row>
							);
						})}
					</Col>
					{
						//add activity
					}
					<Col>
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
									<Button
										variant='primary'
										type='submit'
										className='m-2'>
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
													<option>
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
									<Button
										variant='primary'
										type='submit'
										className='m-2'>
										Add Activity
									</Button>
								</Form>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AaronMock;
