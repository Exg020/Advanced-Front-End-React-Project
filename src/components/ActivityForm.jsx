import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ActivityForm = ({ handleForm }) => {
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const [note, setNote] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!title) {
			alert("Please add a title for the activity.");
			return;
		}
		console.log({ title, time, note });
		handleForm({
			title,
			time,
			note,
		});
	};
	return (
		<>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicTitle'>
					<Form.Label>Activity Title</Form.Label>
					<Form.Control
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Swimming'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicTime'>
					<Form.Label>Activity Time</Form.Label>
					<Form.Control
						type='text'
						placeholder='11am'
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicNotes'>
					<Form.Label>Activity Note</Form.Label>
					<Form.Control
						type='text'
						placeholder='Bring a towel'
						value={note}
						onChange={(e) => setNote(e.target.value)}
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

export default ActivityForm;
