import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const DayForm = ({ trip, setTrip }) => {
  const [dayTitle, setDayTitle] = useState("");
  const [dayDate, setDayDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!dayTitle) {
      alert("Please add a day title.");
      return;
    }
    console.log({ dayTitle, dayDate });
    handleForm({
      dayTitle,
      dayDate,
    });
  };

  const handleForm = ({ dayTitle, dayDate }) => {
    const newArr = [];
    newArr.push({ dayTitle, dayDate });
    console.log(newArr);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTripTitle">
          <Form.Label>Day Title</Form.Label>
          <Form.Control
            type="text"
            value={dayTitle}
            onChange={(e) => setDayTitle(e.target.value)}
            placeholder="Day 1"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDateRange">
          <Form.Label>Day Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nov 8"
            value={dayDate}
            onChange={(e) => setDayDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default DayForm;
