import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TripForm = ({ handleForm }) => {
	const [tripTitle, setTripTitle] = useState("");
	const [tripDateRange, setTripDateRange] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!tripTitle) {
			alert("Please add a trip title.");
			return;
		}
		console.log({ tripTitle, tripDateRange });
		handleForm({
			tripTitle,
			tripDateRange,
		});
	};
	return (
		<>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicTripTitle'>
					<Form.Label>Trip Title</Form.Label>
					<Form.Control
						type='text'
						value={tripTitle}
						onChange={(e) => setTripTitle(e.target.value)}
						placeholder='Spain, Italy'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicDateRange'>
					<Form.Label>Trip Date Range</Form.Label>
					<Form.Control
						type='text'
						placeholder='Nov 8 - Dec 1'
						value={tripDateRange}
						onChange={(e) => setTripDateRange(e.target.value)}
					/>
				</Form.Group>
				<Button
					variant='primary'
					type='submit'
					onClick={(e) => onSubmit(e)}>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default TripForm;
