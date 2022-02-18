import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const FormModal = ({ title, thisForm,  }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				{title}
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{thisForm}</Modal.Body>
			</Modal>
		</>
	);
};

export default FormModal;
