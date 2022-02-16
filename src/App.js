import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
function App() {
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
			<Header title='Travel Planner' />
			<Content destinations={destinations} />
		</>
	);
}

export default App;
