import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Trips from "./components/Trips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.css";

function App() {
	const [trip, setTrip] = useState({
		title: "My first Trip",
		dateRange: "sept 10 - dec 1",
		days: [
			{
				title: "First day",
				date: "sept 10",
				activities: [
					{
						title: "airport",
						time: "3am",
						notes: "stay up all night",
					},
					{
						title: "sleep",
						time: "11:00pm",
						notes: "Sleep!!",
					},
				],
			},
			{
				title: "Second day",
				date: "sept 11",
				activities: [
					{
						title: "wake up",
						time: "9am",
						notes: "take your meds",
					},
					{
						title: "Breakfast",
						time: "10:00am",
						notes: "Food",
					},
				],
			},
		],
	});

	return (
		<>
			<Router>
				<Container>
					<Header title='Travel Planner' />
					<Row>
						<Routes>
							<Route path='/' exact element={<Main />} />
							<Route
								path='/trips'
								element={
									<Trips trip={trip} setTrip={setTrip} />
								}
							/>
						</Routes>
					</Row>
				</Container>
			</Router>
		</>
	);
}

export default App;
