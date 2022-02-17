import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Main from "./components/Main";
import Trips from "./components/Trips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.css";

function App() {
	return (
		<>
			<Router>
				<Container>
					<Header title='Travel Planner' />
					<Routes>
						<Route path='/' exact element={<Main />} />
						<Route path='/trips' element={<Trips />} />
					</Routes>
				</Container>
			</Router>
		</>
	);
}

export default App;
